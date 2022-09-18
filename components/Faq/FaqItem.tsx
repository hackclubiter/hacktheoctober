import React from "react";
import { Disclosure, Transition } from "@headlessui/react";
import { FiChevronDown } from "react-icons/fi";
type Props = {
  q: string;
  a: String;
};

const FaqItem = ({ q, a }: Props) => {
  return (
    <Disclosure>
      {({ open }: { open: boolean }) => (
        <>
          <Disclosure.Button
            className="flex justify-between text-xl  rounded-lg lg:text-2xl font-medium gap-4 cursor-pointer items-center py-3 px-4 font-JetBrains "
          >
            {q}
              <FiChevronDown size={40} />
          </Disclosure.Button>

          <Transition
            enter="transition duration-100 "
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-100"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Disclosure.Panel className="rounded-lg text-gray-200 textl-lg lg:text-xl p-4 ">
              {a}
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  );
};

export default FaqItem;