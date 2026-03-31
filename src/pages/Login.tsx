import { useState } from "react";
import { Link } from "react-router-dom";
import FaboraHeader from "@/components/FaboraHeader";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Mail, Lock, User, ArrowRight, Sparkles } from "lucide-react";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);
  
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [signupName, setSignupName] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");

  const toggleForm = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setIsLogin(!isLogin);
      setIsAnimating(false);
    }, 300);
  };

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const handleSignupSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <FaboraHeader />
      
      <div className="pt-28 pb-20 px-4 md:px-8 flex justify-center items-center min-h-[calc(100vh-200px)]">
        <div className="w-full max-w-md" style={{ perspective: '1000px' }}>
          
          <div 
            className="relative transition-all duration-600"
            style={{
              transform: !isLogin ? 'rotateY(180deg)' : 'rotateY(0deg)',
              transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
              transformStyle: 'preserve-3d'
            }}
          >
            
            <div 
              className="relative bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 p-8 md:p-10"
              style={{ backfaceVisibility: 'hidden' }}
            >
              <div className="absolute -top-3 -right-3 w-20 h-20 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-3 -left-3 w-16 h-16 bg-gradient-to-tr from-primary/10 to-secondary/10 rounded-full blur-xl" />
              
              <div className="relative text-center mb-10">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-foreground to-foreground/80 rounded-2xl mb-4 shadow-lg">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <h1 className="text-2xl md:text-3xl font-semibold tracking-tight mb-2">
                  Welcome Back
                </h1>
                <p className="text-sm text-muted-foreground">
                  Sign in to continue your journey
                </p>
              </div>

              <form onSubmit={handleLoginSubmit} className="space-y-5 relative">
                <div className="group">
                  <label className="text-xs font-medium text-muted-foreground block mb-2 ml-1">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground transition-colors group-focus-within:text-foreground" />
                    <input
                      type="email"
                      value={loginEmail}
                      onChange={(e) => setLoginEmail(e.target.value)}
                      className="w-full bg-secondary/50 border-0 rounded-xl py-3.5 pl-12 pr-4 text-sm outline-none focus:ring-2 focus:ring-foreground/10 focus:bg-white transition-all duration-300 placeholder:text-muted-foreground/60"
                      placeholder="hello@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="group">
                  <label className="text-xs font-medium text-muted-foreground block mb-2 ml-1">
                    Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground transition-colors group-focus-within:text-foreground" />
                    <input
                      type="password"
                      value={loginPassword}
                      onChange={(e) => setLoginPassword(e.target.value)}
                      className="w-full bg-secondary/50 border-0 rounded-xl py-3.5 pl-12 pr-4 text-sm outline-none focus:ring-2 focus:ring-foreground/10 focus:bg-white transition-all duration-300 placeholder:text-muted-foreground/60"
                      placeholder="••••••••"
                      required
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="rounded border-muted" />
                    <span className="text-muted-foreground">Remember me</span>
                  </label>
                  <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
                    Forgot password?
                  </Link>
                </div>

                <Button 
                  type="submit" 
                  className="w-full rounded-xl py-6 text-sm font-medium bg-foreground hover:bg-foreground/90 text-white shadow-lg shadow-foreground/20 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                >
                  Sign In
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </form>

              <div className="relative mt-8 text-center">
                <p className="text-sm text-muted-foreground">
                  Don't have an account?{" "}
                  <button
                    onClick={toggleForm}
                    className="inline-flex items-center gap-1 text-foreground font-semibold hover:underline underline-offset-4 transition-all duration-300 hover:gap-2"
                  >
                    Create Account
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </p>
              </div>
            </div>

            <div 
              className="absolute inset-0 bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 p-8 md:p-10"
              style={{ 
                backfaceVisibility: 'hidden',
                transform: 'rotateY(180deg)'
              }}
            >
              <div className="absolute -top-3 -left-3 w-20 h-20 bg-gradient-to-br from-secondary/30 to-primary/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-3 -right-3 w-16 h-16 bg-gradient-to-tr from-secondary/20 to-primary/10 rounded-full blur-xl" />
              
              <div className="relative text-center mb-10">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-secondary to-secondary/80 rounded-2xl mb-4 shadow-lg">
                  <User className="w-6 h-6 text-white" />
                </div>
                <h1 className="text-2xl md:text-3xl font-semibold tracking-tight mb-2">
                  Create Account
                </h1>
                <p className="text-sm text-muted-foreground">
                  Join us and start your journey
                </p>
              </div>

              <form onSubmit={handleSignupSubmit} className="space-y-4 relative">
                <div className="group">
                  <label className="text-xs font-medium text-muted-foreground block mb-2 ml-1">
                    Full Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground transition-colors group-focus-within:text-foreground" />
                    <input
                      type="text"
                      value={signupName}
                      onChange={(e) => setSignupName(e.target.value)}
                      className="w-full bg-secondary/50 border-0 rounded-xl py-3.5 pl-12 pr-4 text-sm outline-none focus:ring-2 focus:ring-foreground/10 focus:bg-white transition-all duration-300 placeholder:text-muted-foreground/60"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                </div>

                <div className="group">
                  <label className="text-xs font-medium text-muted-foreground block mb-2 ml-1">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground transition-colors group-focus-within:text-foreground" />
                    <input
                      type="email"
                      value={signupEmail}
                      onChange={(e) => setSignupEmail(e.target.value)}
                      className="w-full bg-secondary/50 border-0 rounded-xl py-3.5 pl-12 pr-4 text-sm outline-none focus:ring-2 focus:ring-foreground/10 focus:bg-white transition-all duration-300 placeholder:text-muted-foreground/60"
                      placeholder="hello@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="group">
                  <label className="text-xs font-medium text-muted-foreground block mb-2 ml-1">
                    Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground transition-colors group-focus-within:text-foreground" />
                    <input
                      type="password"
                      value={signupPassword}
                      onChange={(e) => setSignupPassword(e.target.value)}
                      className="w-full bg-secondary/50 border-0 rounded-xl py-3.5 pl-12 pr-4 text-sm outline-none focus:ring-2 focus:ring-foreground/10 focus:bg-white transition-all duration-300 placeholder:text-muted-foreground/60"
                      placeholder="Create a strong password"
                      required
                    />
                  </div>
                </div>

                <div className="pt-2">
                  <Button 
                    type="submit" 
                    className="w-full rounded-xl py-6 text-sm font-medium bg-foreground hover:bg-foreground/90 text-white shadow-lg shadow-foreground/20 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                  >
                    Create Account
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </form>

              <div className="relative mt-8 text-center">
                <p className="text-sm text-muted-foreground">
                  Already have an account?{" "}
                  <button
                    onClick={toggleForm}
                    className="inline-flex items-center gap-1 text-foreground font-semibold hover:underline underline-offset-4 transition-all duration-300 hover:gap-2"
                  >
                    Sign In
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </p>
              </div>
            </div>
          </div>
          
          <div className="absolute -top-10 left-1/4 w-2 h-2 bg-primary/30 rounded-full animate-bounce" style={{ animationDuration: '3s' }} />
          <div className="absolute top-1/2 -right-8 w-3 h-3 bg-secondary/40 rounded-full animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }} />
          <div className="absolute -bottom-8 left-1/3 w-2 h-2 bg-primary/20 rounded-full animate-bounce" style={{ animationDuration: '5s', animationDelay: '2s' }} />
          
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Login;
