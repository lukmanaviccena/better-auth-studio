import { Hero } from "@/components/ui/void-hero";

export default function Home() {
  const navigationLinks = [
    { name: 'HOME', href: '/' },
    { name: 'INSTALLATION', href: '/installation' },
    { name: 'CHANGELOG', href: '/changelog' },
    { name: 'DEMO', href: '/demo' },
    { name: 'GITHUB', href: 'https://github.com/Kinfe123/better-auth-studio' }
  ];
  
  return (
    <div className="h-svh w-screen relative">
      <Hero 
        title="Better Auth Studio"
        description="A powerful admin dashboard for Better Auth. Manage users, sessions, organizations, and more with an intuitive interface. Built with modern web technologies and designed for developers who demand excellence."
        links={navigationLinks}
      />
    </div>
  );
}