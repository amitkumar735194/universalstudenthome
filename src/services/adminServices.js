import { httpClient } from "@/helper/httpHelper";
import axios from "axios";

export async function SignUpAdmin(data){
  const result =  await httpClient.post("/api/admin",data).then(response=>response.data);
  return result;
}

export async function loginAdmin(loginData){
    const result = await httpClient.post('/api/admin/login',loginData).then(response=>response.data);
    return result;
}