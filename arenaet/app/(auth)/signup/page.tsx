import AuthCard from "@/components/auth/AuthCard";
import SignupForm from "@/components/auth/SignupForm";


export default function SignupPage() {
  return (
    <AuthCard
      title="Create Account"
      description="Join Ethiopia's competitive gaming community."
      
    >
      <SignupForm />
    </AuthCard>
  );
}