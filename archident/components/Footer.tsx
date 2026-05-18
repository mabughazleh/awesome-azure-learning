import { Layers } from 'lucide-react'

const links = {
  Product: ['Features', 'Pricing', 'Changelog', 'Roadmap'],
  Company: ['About', 'Blog', 'Careers', 'Press'],
  Resources: ['Documentation', 'Brand Guide', 'API Reference', 'Status'],
  Legal: ['Privacy', 'Terms', 'Security', 'Cookies'],
}

export default function Footer() {
  return (
    <footer className="bg-indigo-900 text-indigo-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-10 mb-16">
          <div className="col-span-2">
            <div className="flex items-center gap-2.5 mb-5">
              <div
                className="w-9 h-9 rounded-xl bg-indigo-600 flex items-center justify-center flex-shrink-0"
                aria-hidden="true"
              >
                <Layers className="w-5 h-5 text-white" strokeWidth={1.5} />
              </div>
              <span className="font-cinzel font-semibold text-white text-lg tracking-wide">
                Arch<span className="text-indigo-400">Ident</span>
              </span>
            </div>
            <p className="font-josefin text-sm leading-relaxed text-indigo-400 max-w-xs">
              Identity Architecture for modern brand teams. Build cohesive, systematic brand identities that scale.
            </p>
          </div>

          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h3 className="font-josefin text-xs font-semibold text-white tracking-widest uppercase mb-5">
                {category}
              </h3>
              <ul className="space-y-3" role="list">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="font-josefin text-sm text-indigo-400 hover:text-white transition-colors duration-200 cursor-pointer"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-indigo-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-josefin text-sm text-indigo-500">
            © {new Date().getFullYear()} ArchIdent. All rights reserved.
          </p>
          <p className="font-josefin text-xs text-indigo-600 tracking-wide">
            Built with systematic design intelligence.
          </p>
        </div>
      </div>
    </footer>
  )
}
