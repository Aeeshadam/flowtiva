
  import Link from "next/link";
  import { Logo } from "./Logo";
  import { Twitter, Github, Linkedin, LucideIcon } from "lucide-react";
  
  const footerLinks = {
    product: [
      { label: "Features", href: "/features" },
      { label: "Pricing", href: "/pricing" },
      { label: "Integrations", href: "/integrations" },
      { label: "Changelog", href: "/changelog" },
    ],
    company: [
      { label: "About", href: "/about" },
      { label: "Blog", href: "/blog" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
    ],
    support: [
      { label: "Help Center", href: "/help" },
      { label: "Documentation", href: "/docs" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  };
  
  const socialLinks: { icon: LucideIcon; href: string; label: string }[] = [
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  ];
  
  const Footer = () => {
    return (
      <footer className="bg-slate-900 bg-primary-dark">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
       
            <div className="col-span-1 md:col-span-1">
              <Logo showText={true} className="mb-4" />
              <p className="text-sm text-slate-400">
                Streamline your workflow and boost productivity with Flowtiva.
              </p>
            </div>
  

            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h3 className="font-semibold text-white mb-4 capitalize">{category}</h3>
                <ul className="space-y-2 text-sm">
                  {links.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className="text-slate-400 hover:text-white transition-colors">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
  
   
          <div className="mt-12 pt-8 border-t border-slate-800">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-slate-400">
                © {new Date().getFullYear()} Flowtiva. All rights reserved.
              </p>
              
           
              <div className="flex items-center space-x-6">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-white transition-colors "
                    aria-label={label}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
  
  export default Footer;