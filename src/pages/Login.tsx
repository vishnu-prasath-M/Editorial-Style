import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-32 pb-20 px-6 md:px-12 flex justify-center">
        <div className="w-full max-w-sm">
          <h1 className="editorial-heading text-3xl md:text-4xl text-center mb-3">Sign In</h1>
          <p className="text-sm text-muted-foreground font-sans text-center mb-12">
            Welcome back to MAISON
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="text-xs uppercase tracking-[0.2em] font-sans block mb-2">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-transparent border-b border-border pb-2 text-sm font-sans outline-none focus:border-foreground transition-colors placeholder:text-muted-foreground"
                placeholder="your@email.com"
                required
              />
            </div>
            <div>
              <label className="text-xs uppercase tracking-[0.2em] font-sans block mb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-transparent border-b border-border pb-2 text-sm font-sans outline-none focus:border-foreground transition-colors placeholder:text-muted-foreground"
                placeholder="••••••••"
                required
              />
            </div>

            <Button variant="editorial" size="lg" className="w-full mt-4" type="submit">
              Sign In
            </Button>
          </form>

          <p className="text-sm text-muted-foreground font-sans text-center mt-8">
            Don't have an account?{" "}
            <Link to="/login" className="text-foreground underline underline-offset-4">
              Create Account
            </Link>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
