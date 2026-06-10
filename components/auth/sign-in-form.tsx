"use client";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import { standardSchemaResolver } from "@hookform/resolvers/standard-schema";
import { z } from "zod/v4";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { EyeClosedIcon, EyeIcon, CircleHelpIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import SiteLogo from "@/assets/site-logo";

const schema = z.object({
 email: z.string().email({ message: "Your email is invalid." }),
 password: z.string().min(4, { message: "Password must be at least 4 characters." }),
 rememberMe: z.boolean().optional(),
});

type SignInFormValues = z.infer<typeof schema>;

const SignInForm = () => {
 const [passwordInputType, setPasswordInputType] = React.useState<"password" | "text">("password");

 const togglePasswordInputType = () => {
  setPasswordInputType(prev => (prev === "password" ? "text" : "password"));
 };

 const {
  control,
  handleSubmit,
  formState: { errors },
 } = useForm<SignInFormValues>({
  resolver: standardSchemaResolver(schema),
  defaultValues: {
   email: "",
   password: "",
   rememberMe: false,
  },
 });

 const onSubmit = (data: SignInFormValues) => {
  console.log(data);
 };

 return (
  <div className="flex h-full w-full flex-col items-center justify-between px-10 pt-[104px] pb-2 sm:px-16">
   {/* Main content */}
   <div className="flex w-full flex-col items-center justify-center">
    <SiteLogo className="mb-10 h-12" />
    <h2 className="mb-2 text-lg leading-7 font-medium">Sign in to your account</h2>
    <h3 className="text-muted-foreground text-sm leading-5">Welcome to Neoro</h3>

    <div className="mt-10 w-full max-w-sm">
     <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-4">
      {/* Email */}
      <div>
       <Label htmlFor="email" className="mb-2 leading-3">
        Email <span className="text-destructive">*</span>
       </Label>
       <Controller
        name="email"
        control={control}
        render={({ field }) => (
         <Input
          {...field}
          id="email"
          type="email"
          placeholder="email@example.com"
          className={cn(errors.email ? "border-destructive" : "")}
         />
        )}
       />
       {errors.email && <p className="text-destructive mt-1.5 text-xs">{errors.email.message}</p>}
      </div>

      {/* Password */}
      <div>
       <Label htmlFor="password" className="mb-2 leading-3">
        Password <span className="text-destructive">*</span>
       </Label>
       <Controller
        name="password"
        control={control}
        render={({ field }) => (
         <div className="relative">
          <Input
           {...field}
           id="password"
           type={passwordInputType}
           placeholder="••••••••"
           className={cn(errors.password ? "border-destructive" : "")}
          />
          <button
           type="button"
           onClick={togglePasswordInputType}
           className={cn(
            "text-muted-foreground hover:text-foreground absolute top-1/2 -translate-y-1/2 ltr:right-3 rtl:left-3",
           )}
          >
           {passwordInputType === "password" ? (
            <EyeClosedIcon className="h-4 w-4" />
           ) : (
            <EyeIcon className="h-4 w-4" />
           )}
          </button>
         </div>
        )}
       />
       {errors.password && <p className="text-destructive mt-1.5 text-xs">{errors.password.message}</p>}
      </div>

      {/* Remember me + Forgot password */}
      <div className="flex items-center justify-between">
       <Controller
        name="rememberMe"
        control={control}
        render={({ field }) => (
         <div className="flex items-center gap-2">
          <Checkbox id="remember-me" checked={field.value} onCheckedChange={field.onChange} />
          <Label htmlFor="remember-me" className="cursor-pointer text-sm font-normal">
           Remember Me
          </Label>
         </div>
        )}
       />
       <Link href="/auth/forgot" className="text-sm text-[#0088FF]">
        Forgot Password?
       </Link>
      </div>

      <Button type="submit" className="w-full rounded-lg">
       Sign In
      </Button>
     </form>
    </div>
   </div>

   {/* Footer */}
   <div className="flex items-center gap-2">
    <CircleHelpIcon className="size-5" />
    <Link href="/help">Get Help</Link>
   </div>
  </div>
 );
};

export default SignInForm;
