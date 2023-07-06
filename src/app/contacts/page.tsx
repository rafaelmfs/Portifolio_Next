import { PageContainer } from "@/components/PageContainer";
import { PageTitle } from "@/components/PageTitle";
import { Monitor, Phone } from "lucide-react";

export default function Contacts() {
  return (
    <PageContainer>
      <PageTitle text="Contact" />

      <div className="flex flex-col gap-6 pt-4 pl-4 mt-4">
        <div className="flex flex-col gap-6">
          <strong className="text-2xl font-light">Feel <b className="font-bold">free</b> to contact me!</strong>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti, debitis. Libero consequatur dicta quas repudiandae, inventore cumque, nostrum sint deleniti quidem optio in esse aspernatur iure incidunt quibusdam labore impedit!
          </p>
        </div>

        <div className="flex items-center mt-20 gap-52">
          <div className="flex items-center gap-10">
            <Monitor size={180} strokeWidth={1} />
            <div className="flex flex-col">
              <span className="text-lg font-bold">www.dev.com.br</span>
              <span className="text-lg font-bold">www.dev.blog.com</span>
            </div>
          </div>

          <div className="flex items-center gap-10">
            <Phone size={172} strokeWidth={1} />
            <div className="flex flex-col">
              <span className="text-lg font-bold">(31) 9 9999-9999</span>
              <span className="text-lg font-bold">(32) 9 8888-8888</span>
            </div>
          </div>
        </div>

        <strong className="mt-20 text-4xl font-bold text-center uppercase">Thanks for patience!</strong>
      </div>
    </PageContainer>
  )
}