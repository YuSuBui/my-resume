/**
 * Resume SPA — render from RESUME_DATA and handle PDF / print.
 */
(function () {
  "use strict";

  const data = window.RESUME_DATA;
  if (!data) {
    console.error("RESUME_DATA is missing. Ensure js/data.js loads before app.js.");
    return;
  }

  /* -------------------------------------------------------------------------- */
  /* Helpers                                                                    */
  /* -------------------------------------------------------------------------- */

  function el(tag, className, attrs) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (attrs) {
      Object.entries(attrs).forEach(([key, value]) => {
        if (value == null || value === "") return;
        if (key === "text") node.textContent = value;
        else if (key === "html") node.innerHTML = value;
        else node.setAttribute(key, value);
      });
    }
    return node;
  }

  function icon(name, className) {
    const i = el("i", className || "icon", {
      "data-lucide": name,
      "aria-hidden": "true",
    });
    return i;
  }

  /** Brand icons (not in Lucide) as inline SVG */
  const BRAND_SVGS = {
    github:
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>',
    linkedin:
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>',
  };

  function brandIcon(name) {
    const wrap = document.createElement("span");
    wrap.innerHTML = BRAND_SVGS[name] || "";
    const svg = wrap.querySelector("svg");
    if (!svg) return wrap;
    svg.classList.add("contact-list__icon");
    svg.setAttribute("width", "14");
    svg.setAttribute("height", "14");
    return svg;
  }

  function contactIcon(name) {
    if (name === "github" || name === "linkedin") {
      return brandIcon(name);
    }
    return icon(name, "contact-list__icon");
  }

  function chips(items, className) {
    const wrap = el("ul", className || "chip-list");
    (items || []).forEach((label) => {
      const li = el("li", "chip", { text: label });
      wrap.appendChild(li);
    });
    return wrap;
  }

  function sectionHeading(title, iconName) {
    const heading = el("h2", "section-title");
    heading.appendChild(icon(iconName, "section-title__icon"));
    heading.appendChild(document.createTextNode(title));
    return heading;
  }

  function bulletList(items) {
    const ul = el("ul", "bullet-list");
    (items || []).forEach((text) => {
      ul.appendChild(el("li", null, { text }));
    });
    return ul;
  }

  function dateRange(start, end) {
    return `${start} – ${end}`;
  }

  /* -------------------------------------------------------------------------- */
  /* Contact helpers                                                            */
  /* -------------------------------------------------------------------------- */

  function buildContacts(profile) {
    const entries = [
      {
        key: "location",
        icon: "map-pin",
        label: profile.location,
        href: null,
      },
      {
        key: "email",
        icon: "mail",
        label: profile.email,
        href: profile.email ? `mailto:${profile.email}` : null,
      },
      {
        key: "phone",
        icon: "phone",
        label: profile.phone,
        href: profile.phone ? `tel:${profile.phone.replace(/\s+/g, "")}` : null,
      },
      {
        key: "website",
        icon: "globe",
        label: "Website",
        href: profile.website,
        display: profile.website
          ? profile.website.replace(/^https?:\/\//, "").replace(/\/$/, "")
          : "",
      },
      {
        key: "linkedin",
        icon: "linkedin",
        label: "LinkedIn",
        href: profile.linkedin,
        display: "LinkedIn",
      },
      {
        key: "github",
        icon: "github",
        label: "GitHub",
        href: profile.github,
        display: "GitHub",
      },
      {
        key: "portfolio",
        icon: "layout-dashboard",
        label: "Portfolio",
        href: profile.portfolio,
        display: "Portfolio",
      },
    ];

    return entries.filter((item) => {
      const value = profile[item.key];
      return typeof value === "string" && value.trim().length > 0;
    });
  }

  /* -------------------------------------------------------------------------- */
  /* Render                                                                     */
  /* -------------------------------------------------------------------------- */

  function renderHeader(profile) {
    const header = el("header", "resume-header");

    const identity = el("div", "resume-header__identity");
    const avatarWrap = el("div", "avatar");
    const img = el("img", "avatar__img", {
      src: profile.avatar,
      alt: `${profile.name} avatar`,
      width: "88",
      height: "88",
      decoding: "async",
      fetchpriority: "high",
    });
    img.addEventListener("error", () => {
      img.src = "assets/avatar.svg";
    });
    avatarWrap.appendChild(img);
    identity.appendChild(avatarWrap);
    identity.appendChild(el("h1", "resume-header__name", { text: profile.name }));
    identity.appendChild(
      el("p", "resume-header__title", { text: profile.title })
    );

    const contactList = el("ul", "contact-list");
    buildContacts(profile).forEach((item) => {
      const li = el("li", "contact-list__item");
      const inner = item.href
        ? el("a", "contact-list__link", {
            href: item.href,
            target: item.href.startsWith("http") ? "_blank" : null,
            rel: item.href.startsWith("http") ? "noopener noreferrer" : null,
          })
        : el("span", "contact-list__text");

      inner.appendChild(contactIcon(item.icon));
      inner.appendChild(
        document.createTextNode(item.display || item.label)
      );
      li.appendChild(inner);
      contactList.appendChild(li);
    });

    const contacts = el("div", "resume-header__contacts");
    contacts.appendChild(contactList);

    header.appendChild(identity);
    header.appendChild(contacts);
    return header;
  }

  function renderSummary(summary) {
    const section = el("section", "resume-section", {
      id: "summary",
      "aria-labelledby": "summary-title",
    });
    const heading = sectionHeading(summary.title, summary.icon);
    heading.id = "summary-title";
    section.appendChild(heading);
    section.appendChild(el("p", "summary-text", { text: summary.text }));
    return section;
  }

  function renderExperience(experience) {
    const section = el("section", "resume-section", {
      id: "experience",
      "aria-labelledby": "experience-title",
    });
    const heading = sectionHeading(experience.title, experience.icon);
    heading.id = "experience-title";
    section.appendChild(heading);

    const list = el("div", "entry-list");
    experience.items.forEach((job) => {
      const entry = el("article", "entry");
      const dates = el("div", "entry__dates", {
        text: dateRange(job.start, job.end),
      });

      const body = el("div", "entry__body");
      body.appendChild(el("h3", "entry__role", { text: job.role }));
      body.appendChild(el("p", "entry__company", { text: job.company }));

      const meta = el("p", "entry__meta");
      meta.appendChild(
        document.createTextNode(
          [job.location, job.employmentType].filter(Boolean).join(" · ")
        )
      );
      body.appendChild(meta);
      body.appendChild(bulletList(job.bullets));
      if (job.technologies && job.technologies.length) {
        body.appendChild(chips(job.technologies, "chip-list chip-list--tech"));
      }

      entry.appendChild(dates);
      entry.appendChild(body);
      list.appendChild(entry);
    });

    section.appendChild(list);
    return section;
  }

  function renderSkills(skills) {
    const section = el("section", "resume-section", {
      id: "skills",
      "aria-labelledby": "skills-title",
    });
    const heading = sectionHeading(skills.title, skills.icon);
    heading.id = "skills-title";
    section.appendChild(heading);

    const grid = el("div", "skills-grid");
    skills.categories.forEach((category) => {
      const block = el("div", "skills-block");
      block.appendChild(
        el("h3", "skills-block__name", { text: category.name })
      );
      block.appendChild(chips(category.items));
      grid.appendChild(block);
    });

    section.appendChild(grid);
    return section;
  }

  function renderProjects(projects) {
    const section = el("section", "resume-section", {
      id: "projects",
      "aria-labelledby": "projects-title",
    });
    const heading = sectionHeading(projects.title, projects.icon);
    heading.id = "projects-title";
    section.appendChild(heading);

    const list = el("div", "project-list");
    projects.items.forEach((project) => {
      const article = el("article", "project");
      article.appendChild(el("h3", "project__name", { text: project.name }));
      article.appendChild(
        el("p", "project__role", { text: project.role })
      );
      article.appendChild(
        el("p", "project__overview", { text: project.overview })
      );
      article.appendChild(
        chips(project.technologies, "chip-list chip-list--tech")
      );
      article.appendChild(bulletList(project.bullets));

      const links = [];
      if (project.github) {
        links.push({ href: project.github, label: "GitHub", icon: "github" });
      }
      if (project.demo) {
        links.push({
          href: project.demo,
          label: "Live Demo",
          icon: "external-link",
        });
      }
      if (links.length) {
        const linkRow = el("div", "project__links");
        links.forEach((link) => {
          const a = el("a", "project__link", {
            href: link.href,
            target: "_blank",
            rel: "noopener noreferrer",
          });
          a.appendChild(icon(link.icon));
          a.appendChild(document.createTextNode(link.label));
          linkRow.appendChild(a);
        });
        article.appendChild(linkRow);
      }

      list.appendChild(article);
    });

    section.appendChild(list);
    return section;
  }

  function renderEducation(education) {
    const section = el("section", "resume-section", {
      id: "education",
      "aria-labelledby": "education-title",
    });
    const heading = sectionHeading(education.title, education.icon);
    heading.id = "education-title";
    section.appendChild(heading);

    const list = el("div", "entry-list");
    education.items.forEach((item) => {
      const entry = el("article", "entry");
      entry.appendChild(
        el("div", "entry__dates", {
          text: dateRange(item.start, item.end),
        })
      );

      const body = el("div", "entry__body");
      body.appendChild(
        el("h3", "entry__role", {
          text: `${item.degree} in ${item.major}`,
        })
      );
      body.appendChild(el("p", "entry__company", { text: item.school }));
      body.appendChild(el("p", "entry__meta", { text: item.location }));
      entry.appendChild(body);
      list.appendChild(entry);
    });

    section.appendChild(list);
    return section;
  }

  function renderCertifications(certifications) {
    if (!certifications || !certifications.items || !certifications.items.length) {
      return null;
    }

    const section = el("section", "resume-section", {
      id: "certifications",
      "aria-labelledby": "certifications-title",
    });
    const heading = sectionHeading(certifications.title, certifications.icon);
    heading.id = "certifications-title";
    section.appendChild(heading);

    const list = el("ul", "cert-list");
    certifications.items.forEach((cert) => {
      const li = el("li", "cert-list__item");
      const name = cert.url
        ? el("a", null, {
            href: cert.url,
            target: "_blank",
            rel: "noopener noreferrer",
            text: cert.name,
          })
        : el("span", "cert-list__name", { text: cert.name });
      li.appendChild(name);
      if (cert.issuer) {
        li.appendChild(
          el("span", "cert-list__issuer", { text: ` · ${cert.issuer}` })
        );
      }
      if (cert.date) {
        li.appendChild(
          el("span", "cert-list__date", { text: ` · ${cert.date}` })
        );
      }
      list.appendChild(li);
    });

    section.appendChild(list);
    return section;
  }

  function renderLanguages(languages) {
    const section = el("section", "resume-section", {
      id: "languages",
      "aria-labelledby": "languages-title",
    });
    const heading = sectionHeading(languages.title, languages.icon);
    heading.id = "languages-title";
    section.appendChild(heading);

    const chipsWrap = el("ul", "chip-list chip-list--languages");
    languages.items.forEach((lang) => {
      chipsWrap.appendChild(
        el("li", "chip", {
          text: `${lang.name} — ${lang.level}`,
        })
      );
    });
    section.appendChild(chipsWrap);
    return section;
  }

  function renderResume() {
    const root = document.getElementById("resume");
    if (!root) return;

    root.innerHTML = "";
    root.appendChild(renderHeader(data.profile));
    root.appendChild(renderSummary(data.summary));
    root.appendChild(renderExperience(data.experience));
    root.appendChild(renderSkills(data.skills));
    root.appendChild(renderProjects(data.projects));
    root.appendChild(renderEducation(data.education));

    const certs = renderCertifications(data.certifications);
    if (certs) root.appendChild(certs);

    root.appendChild(renderLanguages(data.languages));
  }

  /* -------------------------------------------------------------------------- */
  /* Multi-page detection (for conditional page numbers in print)               */
  /* -------------------------------------------------------------------------- */

  function updateMultipageFlag() {
    const page = document.querySelector(".resume-page");
    if (!page) return;

    /* A4 height at ~96dpi — content taller than one sheet */
    const a4HeightPx = (297 / 25.4) * 96;
    const isMulti = page.scrollHeight > a4HeightPx + 8;
    document.body.classList.toggle("is-multipage", isMulti);

    /* Inject @page margin page numbers only when multipage (Firefox honors this) */
    let styleEl = document.getElementById("print-page-numbers");
    if (isMulti) {
      if (!styleEl) {
        styleEl = document.createElement("style");
        styleEl.id = "print-page-numbers";
        styleEl.textContent =
          '@media print { @page { @bottom-center { content: counter(page) " / " counter(pages); font-size: 9pt; color: #64748b; } } }';
        document.head.appendChild(styleEl);
      }
    } else if (styleEl) {
      styleEl.remove();
    }
  }

  /* -------------------------------------------------------------------------- */
  /* Download PDF (immediate file download via html2pdf.js CDN)                 */
  /* -------------------------------------------------------------------------- */

  function setupDownload() {
    const button = document.getElementById("download-pdf");
    if (!button) return;

    button.addEventListener("click", async () => {
      const element = document.getElementById("resume");
      if (!element) return;

      if (typeof window.html2pdf !== "function") {
        console.error("html2pdf.js is not loaded.");
        return;
      }

      const filename = `${data.meta.pdfFilename || "resume"}.pdf`;
      const previousLabel = button.querySelector(".download-fab__label");
      const originalText = previousLabel ? previousLabel.textContent : "";

      button.disabled = true;
      button.setAttribute("aria-busy", "true");
      if (previousLabel) previousLabel.textContent = "Preparing…";
      element.classList.add("is-exporting");

      const options = {
        /* Page padding already provides ~12mm; keep html2pdf margin at 0 */
        margin: 0,
        filename,
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: {
          scale: 2,
          useCORS: true,
          logging: false,
          backgroundColor: "#ffffff",
          scrollX: 0,
          scrollY: 0,
        },
        jsPDF: {
          unit: "mm",
          format: "a4",
          orientation: "portrait",
          compress: true,
        },
        pagebreak: {
          mode: ["css", "legacy"],
          avoid: [".entry", ".project", ".skills-block", ".resume-header"],
        },
      };

      try {
        await window
          .html2pdf()
          .set(options)
          .from(element)
          .save();
      } catch (err) {
        console.error("PDF export failed:", err);
      } finally {
        element.classList.remove("is-exporting");
        button.disabled = false;
        button.removeAttribute("aria-busy");
        if (previousLabel) previousLabel.textContent = originalText || "Download PDF";
      }
    });
  }

  /* -------------------------------------------------------------------------- */
  /* Init                                                                       */
  /* -------------------------------------------------------------------------- */

  function initIcons() {
    if (window.lucide && typeof window.lucide.createIcons === "function") {
      window.lucide.createIcons();
    }
  }

  function absoluteUrl(path) {
    const base = (data.meta.siteUrl || "").replace(/\/$/, "");
    if (!path) return base + "/";
    if (/^https?:\/\//i.test(path)) return path;
    return `${base}/${String(path).replace(/^\//, "")}`;
  }

  function syncStructuredData() {
    const profile = data.profile;
    const meta = data.meta || {};
    const sameAs = [
      profile.linkedin,
      profile.github,
      profile.portfolio,
      profile.website,
    ].filter(Boolean);

    const person = {
      "@context": "https://schema.org",
      "@type": "Person",
      name: profile.name,
      jobTitle: profile.title,
      url: absoluteUrl("/"),
      image: absoluteUrl(profile.avatar),
      email: profile.email ? `mailto:${profile.email}` : undefined,
      telephone: profile.phone || undefined,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Ho Chi Minh City",
        addressCountry: "VN",
      },
      sameAs,
      knowsAbout: [
        "Frontend Engineering",
        "React",
        "TypeScript",
        "JavaScript",
        "Three.js",
        "WebGL",
        "3D Web Visualization",
        "Digital Twin Visualization",
        "Simulation Visualization",
        "Web Performance",
        "Responsive Design",
      ],
      description: meta.description || undefined,
    };

    /* Remove undefined keys for cleaner JSON-LD */
    Object.keys(person).forEach((key) => {
      if (person[key] === undefined) delete person[key];
    });

    let script = document.getElementById("structured-data");
    if (!script) {
      script = document.createElement("script");
      script.id = "structured-data";
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(person);
  }

  function init() {
    document.title = data.meta.documentTitle || document.title;
    syncStructuredData();
    renderResume();
    initIcons();
    setupDownload();
    updateMultipageFlag();

    window.addEventListener("resize", updateMultipageFlag);
    window.addEventListener("load", updateMultipageFlag);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();