// app/(marketing)/page.tsx
import React from "react";
import { ArrowRight } from "lucide-react"; // Lucide Icons
import { Button } from "~/components/ui/button";

export default function MarketingPage() {
  return (
    <div className="bg-background min-h-screen">
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-foreground mb-6 text-4xl font-extrabold">
            Stop Guessing, Start Knowing: Monitor Your Errors in Real-Time
          </h2>
          <p className="text-foreground mb-8 text-lg">
            Get instant insights into application errors, resolve issues faster,
            and deliver a flawless user experience.
          </p>
          <Button size="lg">
            Get Started Free <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      <section className="bg-background py-12">
        <div className="container mx-auto px-4">
          <h3 className="text-foreground mb-6 text-center text-3xl font-semibold">
            Key Features
          </h3>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* Feature 1 */}
            <div className="bg-background rounded-md p-6 shadow-sm">
              <h4 className="text-foreground mb-2 text-xl font-medium">
                Real-Time Error Capture
              </h4>
              <p className="text-foreground">
                Capture errors as they happen, both client-side and server-side.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-background rounded-md p-6 shadow-sm">
              <h4 className="text-foreground mb-2 text-xl font-medium">
                Smart Issue Grouping
              </h4>
              <p className="text-foreground">
                Automatically group similar errors to reduce noise and focus on
                what matters.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-background rounded-md p-6 shadow-sm">
              <h4 className="text-foreground mb-2 text-xl font-medium">
                Easy Setup
              </h4>
              <p className="text-foreground">
                Integrate our SDK in minutes with just a few lines of code.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background py-12">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-foreground mb-6 text-3xl font-semibold">
            How It Works
          </h3>
          <p className="text-foreground mb-4 text-lg">
            1. Sign up for a free account.
          </p>
          <p className="text-foreground mb-4 text-lg">
            2. Create a project and get your unique SDK key.
          </p>
          <p className="text-foreground mb-4 text-lg">
            3. Install our SDK in your application and start monitoring errors.
          </p>
          <Button size="lg">Sign Up Now</Button>
        </div>
      </section>
    </div>
  );
}
