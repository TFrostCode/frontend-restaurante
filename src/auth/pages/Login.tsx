import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Login = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 bg-white shadow-xl rounded-xl max-w-5xl w-full m-8">
        <div className="hidden md:block">
          <img
            src="/src/assets/img/Chelita.jpg"
            alt="Cevichería Chelita"
            className="h-full w-full object-cover"
          />
        </div>

        <Card className="m-3">
          <CardHeader className="flex justify-center items-center gap-4">
            <img
              src="/src/assets/img/logo.jpg"
              alt="Logo del restaurante Chelita"
              className="w-25 h-25 rounded-full object-cover"
            />
            <div>
              <CardTitle className="text-xl md:text-2xl">
                RESTAURANTE CEVICHERÍA
              </CardTitle>
              <CardTitle className="text-red-500 text-xl">CHELITA</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username">Nombre de usuario</Label>
              <Input id="username" placeholder="chelita123" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Contraseña</Label>
              <Input id="password" type="password" placeholder="••••••••" />
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full font-bold text-md" variant="destructive">
              Ingresar
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Login;
