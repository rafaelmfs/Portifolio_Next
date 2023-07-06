import { PageContainer } from "../../components/PageContainer";
import { PageTitle } from "../../components/PageTitle";
import { CardInfo } from "./components/CardInfo";

export default function Resume() {
  return (
    <PageContainer>
      <PageTitle text="Resume" />

      <div className="pt-4 pl-4 mt-4">
        <div>
          <strong className="text-xl uppercase">Education</strong>
          <div className="grid grid-cols-3 gap-8 pb-10 my-4 mb-10 border-b border-dotted border-black/20">
            <CardInfo
              category="UNIVERSITY EDUCATION"
              title="Computer Science"
              description="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a
              complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of
              human happiness."
            />
            <CardInfo
              category="UNIVERSITY EDUCATION"
              title="Computer Engering"
              description="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a
              complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of
              human happiness."
            />
            <CardInfo
              category="Specialization"
              title="MBA Business Management"
              description="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a
              complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of
              human happiness."
            />
          </div>
        </div>
        <div>
          <strong className="text-xl uppercase">Experience</strong>
          <div className="grid grid-cols-3 gap-8 my-4">
            <CardInfo
              category="Freelancer"
              title="Web designer"
              description="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a
              complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of
              human happiness."
            />
            <CardInfo
              category="CONTRATO"
              title="Graphics Designer"
              description="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a
              complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of
              human happiness."
            />
            <CardInfo
              category="CONTRATO"
              title="Product Designer"
              description="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a
              complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of
              human happiness."
            />
          </div>
        </div>
      </div>
    </PageContainer>
  )
}