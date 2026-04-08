// PBIFab Solutions LLP — Main JS

/* ─── NAVBAR ─── */
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

window.addEventListener('scroll', () => {
  if (window.scrollY > 20) navbar.classList.add('scrolled');
  else navbar.classList.remove('scrolled');
});

hamburger?.addEventListener('click', () => {
  navLinks?.classList.toggle('open');
});

// Close nav on link click (mobile)
navLinks?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// Set active nav link
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a').forEach(link => {
  const linkPage = link.getAttribute('href').split('/').pop();
  if (linkPage === currentPage) {
    link.classList.add('active');
  } else {
    link.classList.remove('active');
  }
});

/* ─── SCROLL ANIMATIONS ─── */
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.card, .strip-card, .industry-card, .feature-card, .team-card, .timeline-item, .mission-card, .info-item').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});

/* ─── CHATBOT ─── */
const chatbotBtn = document.getElementById('chatbotBtn');
const chatbotWindow = document.getElementById('chatbotWindow');
const chatClose = document.getElementById('chatClose');
const chatInput = document.getElementById('chatInput');
const chatSend = document.getElementById('chatSend');
const chatMessages = document.getElementById('chatMessages');
const chatForm = document.getElementById('chatForm');
const cfSubmit = document.getElementById('cfSubmit');
const cfStatus = document.getElementById('cfStatus');

const responses = {
  services: "PBIFab offers Power BI report development, Microsoft Fabric implementation, data strategy, migration services, and training & enablement. Want to know more about any specific service?",
  fabric: "Microsoft Fabric is a unified analytics platform. PBIFab specializes in end-to-end Fabric deployments — including OneLake, Data Factory pipelines, and Synapse Data Engineering.",
  powerbi: "We create bespoke, interactive Power BI reports and dashboards. Our design-first approach ensures dashboards are not just functional but visually compelling and intuitive.",
  pricing: "Pricing depends on project scope and requirements. Please leave your details and our team will get back to you with a customized proposal.",
  contact: "You can reach us at analytics@pbifab.com or use the contact form on our website. Alternatively, fill in the form below and we'll respond shortly!",
  team: "PBIFab has a team of 20+ certified Microsoft Data Analysts and Fabric Analytics Engineers, each with 5+ years of experience. All work remotely for global coverage.",
  migration: "We assist companies migrating from Tableau, Qlik, and Excel to the Power BI and Fabric ecosystem — with minimal disruption and maximum efficiency.",
  hello: "Hello! Welcome to PBIFab Solutions. I'm here to help you learn about our Microsoft Power BI and Fabric services. What would you like to know?",
  hi: "Hi there! Great to see you. How can I help you with your data analytics needs today?",
  default: "Thanks for your question! For detailed information, I recommend leaving your contact details below and our team will reach out. Or feel free to ask about our services, team, Fabric, Power BI, or pricing!"
};

function addMessage(text, type) {
  const msg = document.createElement('div');
  msg.className = `chat-msg ${type}`;
  msg.textContent = text;
  chatMessages.appendChild(msg);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function getResponse(input) {
  const lower = input.toLowerCase();
  if (lower.includes('service') || lower.includes('offer') || lower.includes('provide')) return responses.services;
  if (lower.includes('fabric') || lower.includes('onelake') || lower.includes('synapse')) return responses.fabric;
  if (lower.includes('power bi') || lower.includes('powerbi') || lower.includes('dashboard') || lower.includes('report')) return responses.powerbi;
  if (lower.includes('price') || lower.includes('cost') || lower.includes('pricing') || lower.includes('quote')) return responses.pricing;
  if (lower.includes('contact') || lower.includes('email') || lower.includes('reach') || lower.includes('talk')) return responses.contact;
  if (lower.includes('team') || lower.includes('developer') || lower.includes('staff') || lower.includes('expert')) return responses.team;
  if (lower.includes('migrat') || lower.includes('tableau') || lower.includes('qlik') || lower.includes('excel')) return responses.migration;
  if (lower.includes('hello') || lower.includes('hey')) return responses.hello;
  if (lower.includes('hi') || lower.includes('good')) return responses.hi;
  return responses.default;
}

function handleSend() {
  const text = chatInput?.value?.trim();
  if (!text) return;
  addMessage(text, 'user');
  chatInput.value = '';
  setTimeout(() => {
    const resp = getResponse(text);
    addMessage(resp, 'bot');
    if (resp.includes('leave your') || resp.includes('contact details')) {
      setTimeout(() => { if (chatForm) chatForm.style.display = 'flex'; chatForm.style.flexDirection = 'flex'; chatForm.style.display = 'block'; }, 500);
    }
  }, 600);
}

chatbotBtn?.addEventListener('click', () => {
  chatbotWindow?.classList.toggle('open');
});
chatClose?.addEventListener('click', () => {
  chatbotWindow?.classList.remove('open');
});
chatSend?.addEventListener('click', handleSend);
chatInput?.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') handleSend();
});

cfSubmit?.addEventListener('click', () => {
  const name = document.getElementById('cfName')?.value?.trim();
  const email = document.getElementById('cfEmail')?.value?.trim();
  const message = document.getElementById('cfMessage')?.value?.trim();
  if (!name || !email || !message) {
    if (cfStatus) cfStatus.textContent = 'Please fill in all fields.';
    return;
  }
  const mailto = `mailto:analytics@pbifab.com?subject=Website Inquiry from ${encodeURIComponent(name)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
  window.location.href = mailto;
  if (cfStatus) cfStatus.textContent = '✓ Message sent! We\'ll be in touch soon.';
  setTimeout(() => {
    if (chatForm) chatForm.style.display = 'none';
    addMessage('Thanks! Your message has been sent to the PBIFab team. We\'ll get back to you shortly at ' + email, 'bot');
  }, 1000);
});

/* ─── CONTACT FORM (contact page) ─── */
const mainForm = document.getElementById('mainContactForm');
mainForm?.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('contactName')?.value?.trim();
  const email = document.getElementById('contactEmail')?.value?.trim();
  const company = document.getElementById('contactCompany')?.value?.trim();
  const service = document.getElementById('contactService')?.value;
  const message = document.getElementById('contactMessage')?.value?.trim();
  if (!name || !email || !message) return;
  const subject = `PBIFab Inquiry${company ? ' from ' + company : ''}: ${service || 'General'}`;
  const body = `Name: ${name}\nEmail: ${email}\nCompany: ${company || 'Not provided'}\nService Interest: ${service || 'General'}\n\nMessage:\n${message}`;
  window.location.href = `mailto:analytics@pbifab.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  const successEl = document.getElementById('formSuccess');
  if (successEl) successEl.style.display = 'block';
});
