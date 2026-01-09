
import { Github, Linkedin, Mail, MapPin } from "lucide-react";

export const ContactSection = () => {
  return (
    <section
      id="contact"
      className="py-20 md:py-28 px-4 relative border-t border-border/60 bg-muted/30"
    >
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <p className="text-center text-foreground/70 mb-12 max-w-2xl mx-auto leading-relaxed">
          Email is the best way to reach me for professional inquiries. 
        </p>

        <div className="max-w-3xl mx-auto rounded-2xl border border-border bg-card p-8 shadow-sm text-left">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Email */}
            <div className="rounded-2xl border border-border bg-background p-6">
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-xl bg-primary/10">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-semibold">Email</h3>
                  <a
                    href="mailto:arushna27@gmail.com"
                    className="text-foreground/70 hover:text-primary transition-colors break-all"
                  >
                    arushna27@gmail.com
                  </a>

                  <div className="mt-4">
                    <a
                      href="mailto:arushna27@gmail.com?subject=Connecting%20from%20your%20website"
                      className="cosmic-button w-fit inline-flex"
                    >
                      Email me
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Location + Links */}
            <div className="rounded-2xl border border-border bg-background p-6">
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-xl bg-primary/10">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div className="min-w-0 w-full">
                  <h3 className="font-semibold">Based in</h3>
                  <p className="text-foreground/70">Toronto, ON, Canada</p>

                  <div className="mt-4 flex items-center gap-3">
                    <a
                      href="https://www.linkedin.com/in/arushna-balaganesh/"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card text-foreground/70 hover:text-primary hover:bg-muted/40 transition-colors"
                    >
                      <Linkedin className="h-4 w-4" />
                      LinkedIn
                    </a>

                    <a
                      href="https://github.com/arushnab"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card text-foreground/70 hover:text-primary hover:bg-muted/40 transition-colors"
                    >
                      <Github className="h-4 w-4" />
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
