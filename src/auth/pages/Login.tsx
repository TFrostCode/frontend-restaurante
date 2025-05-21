"use client"

import { useState } from "react"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"

const formSchema = z.object({
  username: z.string().min(1, { message: "El nombre de usuario es requerido" }),
  password: z.string().min(6, { message: "La contraseña debe tener al menos 6 caracteres" }),
})

type LoginFormValues = z.infer<typeof formSchema>

const Login = () => {
  const [isLoading, setIsLoading] = useState(false)

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  })

  const onSubmit = async (data: LoginFormValues) => {
    setIsLoading(true)
    try {
      console.log("Login data:", data)
      await new Promise((resolve) => setTimeout(resolve, 1000))
    } catch (error) {
      console.error("Login error:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 bg-white shadow-xl rounded-xl max-w-5xl w-full m-8">
        <div className="hidden md:block">
          <img
            src="/src/assets/img/Chelita.jpg"
            alt="Cevichería Chelita"
            className="h-full w-full p-8 object-cover rounded-l-xl"
          />
        </div>

        <Card className="m-3 border-0 shadow-none">
          <CardHeader className="flex justify-center items-center gap-4">
            <img
              src="/src/assets/img/logo.jpg"
              alt="Logo del restaurante Chelita"
              className="w-24 h-24 rounded-full object-cover"
            />
            <div>
              <CardTitle className="text-lg md:text-2xl">RESTAURANTE CEVICHERÍA</CardTitle>
              <CardTitle className="text-red-500 text-xl">CHELITA</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nombre de usuario</FormLabel>
                      <FormControl>
                        <Input placeholder="chelita123" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Contraseña</FormLabel>
                      <FormControl>
                        <Input type="password" placeholder="••••••••" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  className="w-full font-bold text-md mt-4"
                  variant="destructive"
                  disabled={isLoading}
                >
                  {isLoading ? "Procesando..." : "Ingresar"}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Login
