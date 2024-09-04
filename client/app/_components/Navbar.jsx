"use client";
import Image from "next/image";
import Search from "./Search";
import { useDisclosure } from "@mantine/hooks";
import { Modal } from "@mantine/core";
// import CreateJobForm from "./CreateJobForm";
import Link from "next/link";
import CreateJobForm2 from "./CreateJobForm2";
const Navbar = ({ handleNewJob, onSearch }) => {
  const [isCreateJobModalOpen, setIsCreateJobModelOpen] = useDisclosure(false);
  return (
    <>
      <div className="search-container">
        <header className="md:py-5 w-full bg-white ">
          <nav
            style={{
              border: "1px solid #fcfcfc",
              boxShadow: "0px 0px 20px rgba(127, 127, 127, 0.15)",
            }}
            className="navbar-container flex flex-col md:flex-row md:items-center md:justify-between shadow-none w-full md:h-[80px] md:w-[890px] border-2 border-[#FCFCFC] mx-auto bg-white md:px-[28px] md:py-[16px] gap-4 rounded-non md:rounded-full"
          >
            <Link
              href="/"
              className="bg-purple-40 max-md:pt-1 flex items-center justify-center"
            >
              <Image
                src="/logo.png"
                height={44}
                width={44}
                alt="logo"
                title="CyberMind Works"
              />
            </Link>
            <ul className="flex flex-wrap flex-grow md:gap-4 justify-around bg-red-40">
              <li className="bg-fuchsia-60">
                <Link
                  href="/"
                  className="text-[#303030] text-sm md:text-base font-semibold leading-6"
                >
                  Home
                </Link>
              </li>

              <li className=" bg-fuchsia-60">
                <Link
                  href="#"
                  className="text-[#303030] text-sm md:text-base font-semibold leading-6"
                >
                  Find Jobs
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-[#303030] text-sm md:text-base font-semibold leading-6"
                >
                  Find Talents
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-[#303030] text-sm md:text-base font-semibold leading-6"
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-[#303030] text-sm md:text-base font-semibold leading-6"
                >
                  Testimonials
                </Link>
              </li>
            </ul>
            <button
              onClick={() => {
                if (isCreateJobModalOpen === false) {
                  setIsCreateJobModelOpen.open();
                }
              }}
              className="rounded-lg py-1.5 md:py-[8px] md:px-[24px] md:rounded-[30px] text-white font-semibold leading-6"
              style={{
                background:
                  "linear-gradient(180deg, #A128FF 0%, #6100DF 113.79%)",
              }}
            >
              Create Jobs
            </button>
          </nav>
        </header>
        <Search onSearch={onSearch} />
      </div>

      <Modal
        opened={isCreateJobModalOpen}
        onClose={setIsCreateJobModelOpen.close}
        withCloseButton={false}
        size={"xl"}
        radius={16}
      >
        <CreateJobForm2
          handleNewJob={handleNewJob}
          closeModel={() => {
            setIsCreateJobModelOpen.close();
          }}
        />
      </Modal>
    </>
  );
};

export default Navbar;
