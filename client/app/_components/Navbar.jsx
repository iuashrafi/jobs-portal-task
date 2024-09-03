"use client";
import Image from "next/image";
import Search from "./Search";
import { useDisclosure } from "@mantine/hooks";
import { Modal } from "@mantine/core";
import CreateJobForm from "./CreateJobForm";
import Link from "next/link";
const Navbar = ({ handleNewJob, onSearch }) => {
  const [isCreateJobModalOpen, setIsCreateJobModelOpen] = useDisclosure(false);
  return (
    <>
      <div className="search-container">
        <header className="py-5 bg-white">
          <nav className="shadow-none w-full navbar-container  md:h-[80px] md:w-[890px] border-2 border-[#FCFCFC]   mx-auto bg-white px-[28px] py-[16px] flex items-center justify-between gap-4 rounded-full">
            <Link href="/">
              <Image
                src="/logo.png"
                height={44}
                width={44}
                alt="logo"
                title="CyberMind Works"
              />
            </Link>
            <ul className="flex flex-col sm:flex-row flex-grow gap-4 justify-around bg-red-30 ">
              <li>
                <Link
                  href="/"
                  className="text-[#303030] text-[1rem] font-semibold leading-6"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="#"
                  className="text-[#303030] text-[1rem] font-semibold leading-6"
                >
                  Find Jobs
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-[#303030] text-[1rem] font-semibold leading-6"
                >
                  Find Talents
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-[#303030] text-[1rem] font-semibold leading-6"
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-[#303030] text-[1rem] font-semibold leading-6"
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
              className="btn-create-jobs bg-blue-500 text-white font-semibold leading-6"
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
      >
        <CreateJobForm
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
