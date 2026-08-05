import AuthIllustration from "@/components/auth/AuthIllustration";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen bg-black">
      <div className="flex min-h-screen">

        {/* Left Branding Section */}
        <AuthIllustration />


        {/* Right Authentication Section */}
        <section
          className="
            flex
            w-full
            items-center
            justify-center
            px-6
            py-12
            lg:w-1/2
          "
        >
          {children}
        </section>

      </div>
    </main>
  );
}