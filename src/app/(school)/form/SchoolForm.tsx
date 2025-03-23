"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SchoolFormSchema, SchoolFormType } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
export default function SchoolForm({
  mode,
  defaultValues,
  orgId,
}: {
  mode: "create" | "edit";
  defaultValues: SchoolFormType;
  orgId: string;
}) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<z.infer<typeof SchoolFormSchema>>({
    resolver: zodResolver(SchoolFormSchema),
    defaultValues,
  });
  const { handleSubmit } = form;
  async function onSubmit(values: z.infer<typeof SchoolFormSchema>) {
    try {
      setIsLoading(true);
      if (mode === "create") {
        const res = await fetch("/api/school", {
          body: JSON.stringify(values),
          method: "POST",
        });
        if (!res.ok) {
          throw new Error("Form submission error");
        }
        const data = await res.json();
        toast(data.message);
        router.push("/home");
      } else if (mode === "edit" && orgId) {
        const res = await fetch("/api/school", {
          body: JSON.stringify(values),
          method: "PUT",
        });

        const data = await res.json();
        toast(data.message);
        router.push("/home");
      }
    } catch (error) {
      // Handle error here
      console.log(error);
      toast("Form submission error");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="flex flex-col justify-center items-center flex-1  text-xl">
      <Card className="mx-auto rounded-md  max-w-md w-full md:max-w-3xl md:w-full">
        <CardHeader>
          <CardTitle className="text-2xl">
            {mode === "create" ? "Create School" : "Edit School"}
          </CardTitle>
          <CardDescription>
            {mode === "create"
              ? "Enter details to create a new school."
              : "Update details for the school."}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
              <div className="flex flex-col space-y-4 md:flex-row md:gap-4">
                {/* Left Side Fields */}
                <div className="w-full space-y-6 md:w-1/2">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem className="grid gap-2">
                        <FormLabel htmlFor="name">School Name</FormLabel>
                        <FormControl>
                          <Input
                            id="name"
                            placeholder="Example School"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                      <FormItem className="grid gap-2">
                        <FormLabel htmlFor="description">Description</FormLabel>
                        <FormControl>
                          <Textarea
                            id="description"
                            placeholder="Enter a brief description"
                            rows={5} // Adjust the number of rows as needed
                            className="h-28 md:h-29.5" // Adjust height for better alignment
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="address"
                    render={({ field }) => (
                      <FormItem className="grid gap-2">
                        <FormLabel htmlFor="address">Address</FormLabel>
                        <FormControl>
                          <Input
                            id="address"
                            placeholder="123 Main St"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Right Side Fields */}
                <div className="w-full space-y-6 md:w-1/2">
                  <FormField
                    control={form.control}
                    name="country"
                    render={({ field }) => (
                      <FormItem className="grid gap-2">
                        <FormLabel htmlFor="country">Country</FormLabel>
                        <FormControl>
                          <Input
                            id="country"
                            placeholder="United States"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="state"
                    render={({ field }) => (
                      <FormItem className="grid gap-2">
                        <FormLabel htmlFor="state">State/Province</FormLabel>
                        <FormControl>
                          <Input
                            id="state"
                            placeholder="California"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="city"
                    render={({ field }) => (
                      <FormItem className="grid gap-2">
                        <FormLabel htmlFor="city">City</FormLabel>
                        <FormControl>
                          <Input
                            id="city"
                            placeholder="San Francisco"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem className="grid gap-2">
                        <FormLabel htmlFor="phone">Phone</FormLabel>
                        <FormControl>
                          <Input
                            id="phone"
                            placeholder="1234567890"
                            type="tel"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              <Button
                type="submit"
                className="w-full"
                size={"lg"}
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <span className="pl-3">
                      {mode === "create" ? "Creating..." : "Updating..."}
                    </span>
                  </div>
                ) : (
                  <span>{mode === "create" ? "Create" : "Update"}</span>
                )}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
