import React, { Fragment, useEffect, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { SelectorIcon, CheckIcon } from "@heroicons/react/solid";
import { useDispatch } from "react-redux";
import { getAllBooksAction } from "../Redux/Actions/BooksActions";

const Emotion = [
  { title: "Depressed" },
  { title: "Curiosity" },
  { title: "frustrated" },
  { title: "nostalgia" },
];

const Rate = [
  { title: "sort by Rate" },
  { title: "1 start" },
  { title: "2 start" },
  { title: "3 start" },
  { title: "4 start" },
  { title: "5 start" },
];

function Filters({ categories, search }) {
  const dispatch = useDispatch();
  const [category, setCategory] = useState({
    title: "All Categories",
  });
  const [rate, setRate] = useState(Rate[0]);
  const [emotion, setEmotion] = useState({ title: " All emotions" });

  const FiltersData = [
    {
      value: category,
      onChange: setCategory,
      items:
        categories?.length > 0
          ? [
              {
                title: "All Categories",
              },
              ...categories,
            ]
          : [{ title: "Loading..." }],
    },
    {
      value: rate,
      onChange: setRate,
      items: Rate,
    },
    {
      value: emotion,
      onChange: setEmotion,
      items:
        Emotion?.length > 0
          ? [
              {
                title: "All emotions",
              },
              ...Emotion,
            ]
          : [{ title: "Loading..." }],
    },
  ];
  useEffect(() => {
    console.log(category, emotion, rate);
    if (category?.title !== "Loading...") {
      dispatch(
        getAllBooksAction({
          category: category.title === "All Categories" ? "" : category.title,
          emotion: emotion.title === " All emotions" ? "" : emotion.title,
          rate: rate.title.replace(/\D/g, ""),
          search: search ? search : "",
        })
      );
    }
  }, [category, emotion, dispatch, rate, search]);
  return (
    <div className="my-6 bg-dry border text-dryGray border-gray-800 grid md:grid-cols-4 grid-col-2 lg:gap-12 gap-2 rounded p-6">
      {FiltersData.map((item, index) => (
        <Listbox key={index} value={item.value} onChange={item.onChange}>
          <div className="relative">
            <Listbox.Button className="relative border border-border bg-main w-full py-2 pl-3 pr-10 text-left text-white rounded-lg cursor-default focus:outline-none text-xs">
              <span className="block truncate">{item.value.title}</span>
              <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <SelectorIcon className="h-5 w-5" aria-hidden="true" />
              </span>
            </Listbox.Button>
            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full bg-dry border border-border ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                {item.items.map((item, index) => (
                  <Listbox.Option
                    key={index}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                        active ? "bg-main text-white" : "text-white"
                      }`
                    }
                    value={item}
                  >
                    {item.title}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </Listbox>
      ))}
    </div>
  );
}

export default Filters;
