'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';

const localeLabels = { fr: 'FR', de: 'DE', it: 'IT' };

export default function Header() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: `/${locale}/controle-oibt`, label: t('controle') },
    { href: `/${locale}/prix-controle-oibt`, label: t('prix') },
    { href: `/${locale}/villes`, label: t('villes') },
    { href: `/${locale}/cantons`, label: t('cantons') },
    { href: `/${locale}/blog`, label: t('blog') },
    { href: `/${locale}/outils/simulateur-prix`, label: t('outils') },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary-700 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">⚡</span>
            </div>
            <span className="font-bold text-primary-900 text-lg hidden sm:block">
              {locale === 'de' ? 'Elektrokontrolle.ch' : locale === 'it' ? 'Controllo-OIBT.ch' : 'Contrôle-OIBT.ch'}
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-700 hover:text-primary-700 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-3">
            {/* Language switcher */}
            <div className="hidden sm:flex items-center gap-1 border border-gray-200 rounded-lg p-1">
              {(['fr', 'de', 'it'] as const).map((loc) => (
                <Link
                  key={loc}
                  href={`/${loc}`}
                  className={`px-2 py-1 text-xs font-semibold rounded transition-colors ${
                    locale === loc
                      ? 'bg-primary-700 text-white'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {localeLabels[loc]}
                </Link>
              ))}
            </div>

            {/* CTA */}
            <Link
              href={`/${locale}/devis-controle-oibt`}
              className="btn-primary text-sm py-2 px-4"
            >
              {t('devis')}
            </Link>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 text-gray-600"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
            >
              {menuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-100">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-2 text-gray-700 font-medium"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex gap-2 mt-3">
              {(['fr', 'de', 'it'] as const).map((loc) => (
                <Link
                  key={loc}
                  href={`/${loc}`}
                  className={`px-3 py-1 text-sm font-semibold rounded ${
                    locale === loc ? 'bg-primary-700 text-white' : 'border border-gray-300'
                  }`}
                >
                  {localeLabels[loc]}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
