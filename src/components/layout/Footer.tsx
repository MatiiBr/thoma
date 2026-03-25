const footerLinks = [
  {
    title: 'Servicios',
    links: [
      { label: 'Desarrollo Web', href: '#' },
      { label: 'Apps Móviles', href: '#' },
      { label: 'Marketing Digital', href: '#' },
      { label: 'Branding', href: '#' },
    ],
  },
  {
    title: 'Empresa',
    links: [
      { label: 'Nosotros', href: '#nosotros' },
      { label: 'Proyectos', href: '#proyectos' },
      { label: 'Contacto', href: '#contacto' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="border-t border-muted/20 bg-background-secondary">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 py-16 md:flex-row md:justify-between">
        {/* Brand */}
        <div className="max-w-xs">
          <a
            href="#"
            className="font-heading text-2xl font-bold tracking-tight"
          >
            Thoma<span className="text-accent">.</span>
          </a>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            Transformamos ideas en productos digitales de alto impacto.
            Software &amp; Marketing.
          </p>
        </div>

        {/* Links */}
        <div className="flex gap-10 sm:gap-16">
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="font-heading text-sm font-semibold uppercase tracking-wider">
                {group.title}
              </h4>
              <ul className="mt-4 flex flex-col gap-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-muted/20 px-6 py-6">
        <p className="text-center text-xs text-muted">
          &copy; {new Date().getFullYear()} Thoma. Todos los derechos
          reservados.
        </p>
      </div>
    </footer>
  )
}
