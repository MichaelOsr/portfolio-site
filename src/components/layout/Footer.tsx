import { SocialLinks } from '@/components/common/SocialLinks'
import { profile } from '@/data/profile'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-card border-t">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row sm:px-6">
        <p className="text-muted-foreground text-sm">
          © {year} {profile.name}. Built with React &amp; TypeScript.
        </p>
        <SocialLinks links={profile.socials} />
      </div>
    </footer>
  )
}
