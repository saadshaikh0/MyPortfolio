import opsveda_logo from "../../images/brands/opsveda.png";
import clarista_logo from "../../images/brands/clarista.png";
import oaktree_logo from "../../images/brands/oaktree.png";

export function Timeline() {
  return (
    <ol class="relative border-l border-gray-200 dark:border-gray-700 md:ml-0 ml-5 ">
      <li class="mb-10 ml-8">
        <div class="absolute  md:w-10 sm:h-10 w-8 h-8 bg-white rounded-full mt-1.5 -left-[18px] md:-left-[22px] border border-white dark:border-gray-900 dark:bg-gray-700">
          <img src={oaktree_logo} className="w-16 h-10" />
        </div>{" "}
        <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
          May 2023 - Current
        </time>
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
          Oaktree Capital Management
        </h3>
        <h4 class="text-md font-semibold text-gray-400 dark:text-white">
          Full Stack Developer (Contracter)
        </h4>
        <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
          Involved in building dynamic React pages using TypeScript, ensuring
          smooth user interactions and optimal performance. Additionally, I have
          developed AWS Lambdas in Node.js and seamlessly integrated them to
          create serverless backend logic, enhancing scalability and efficiency.
          Throughout my tenure, I have also collaborated with cross-functional
          teams, designed UI pages in figma, and conducted thorough code
          reviews, fostering a culture of continuous improvement.
        </p>
      </li>
      <li class="mb-10 ml-8">
        <div class="absolute w-12 h-10 bg-white rounded-full mt-1.5 -left-[20px] md:-left-[25px] border border-white dark:border-gray-900 dark:bg-gray-700">
          <img src={clarista_logo} className="w-16 h-10" />
        </div>
        <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
          May 2022 - Current
        </time>

        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
          Clarista.io
        </h3>
        <h4 class="text-md font-semibold text-gray-400 dark:text-white">
          React JS Developer
        </h4>
        <p class="text-base font-normal text-gray-500 dark:text-gray-400">
          Designed and developed dynamic SPA involving complex components such
          as Grids , Tabs , Dropdowns etc. Integrated Redux architecture for
          better state management .Converted class based components to hooks for
          better code reusability and maintenance. Proactively cooperated with
          backend team for on time delivery of modules. Implemented global CSS
          classes to reduce development time
        </p>
      </li>
      <li class="mb-10 ml-8">
        <div class="absolute w-12 h-10 bg-white rounded-full mt-1.5 -left-[20px] md:-left-[25px] border border-white dark:border-gray-900 dark:bg-gray-700">
          <img src={opsveda_logo} className="w-16 h-10" />
        </div>
        <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
          Jul 2021 - April 2022
        </time>
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
          Opsveda Inc.
        </h3>
        <h4 class="text-md font-semibold text-gray-400 dark:text-white">
          React JS Developer
        </h4>
        <p class="text-base font-normal text-gray-500 dark:text-gray-400">
          Developed and designed multiple modules in the product using the best
          React practices and concepts for btter customer satisfaction. Reduced
          the loadin time of app by 20% using code-splitting and lazy loading
          resulting in better user experience. Integrated complex grid / chart
          libraries for a more interactive UI experience. Developed components
          which deals with huge datasets( 10000+ rows) using lazy loading for a
          smooth user experience.
        </p>
      </li>
      <li class="ml-8">
        <div class="absolute w-12 h-10 bg-white rounded-full mt-1.5 -left-[20px] md:-left-[25px] border border-white dark:border-gray-900 dark:bg-gray-700">
          <img src={opsveda_logo} className="w-16 h-10" />
        </div>
        <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
          Feb 2021 - Jun 2021
        </time>
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
          Opsveda Inc.
        </h3>
        <h4 class="text-md font-semibold text-gray-400 dark:text-white">
          React JS - Intern
        </h4>
        <p class="text-base font-normal text-gray-500 dark:text-gray-400">
          Involved in bug fixing and UI enhancements of already existing
          modules. Updating existing code with best React practices . Upgrading
          and integrating new versions of existing libraries to remove warnings.
          Collaberated with backend team to improve loading time of the
          application by splitting APIs and implementing background loading.
        </p>
      </li>
    </ol>
  );
}
