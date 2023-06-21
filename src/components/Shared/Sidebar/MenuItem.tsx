import Image from "next/image";
import { MenuListType } from "./Interface/MenuList.js";

export const MenuList: MenuListType[] = [
  {
    key: "",
    title: "ড্যাশবোর্ড",
    pathTitle: "ড্যাশবোর্ড",
    icon: (
      <Image
        width={20}
        height={20}
        src="/assets/icons/sidebaricon/dashboard.png"
        alt=""
        className="menuSingleItemIcon"
      />
    ),
    path: "/admin",
    items: [],
  },
  {
    key: "",
    title: "কনফিগারেশন ব্যবস্থাপনা",
    pathTitle: "কনফিগারেশন ব্যবস্থাপনা",
    icon: (
      <Image
        width={20}
        height={20}
        src="/assets/icons/sidebaricon/configuration.png"
        alt=""
        className="menuSingleItemIcon"
      />
    ),
    path: "#",
    items: [
      {
        key: "",
        title: "Division",
        pathTitle: "Division",
        icon: (
          <Image
            width={20}
            height={20}
            src="/assets/icons/sidebaricon/configuration.png"
            alt=""
            className="menuSingleItemIcon"
          />
        ),
        path: "/admin/system-configuration/division",
      },
      {
        key: "",
        title: "District",
        pathTitle: "District",
        icon: (
          <Image
            width={20}
            height={20}
            src="/assets/icons/sidebaricon/configuration.png"
            alt=""
            className="menuSingleItemIcon"
          />
        ),
        path: "/admin/system-configuration/district",
      },
      {
        key: "",
        title: "Upazila",
        pathTitle: "Upazila",
        icon: (
          <Image
            width={20}
            height={20}
            src="/assets/icons/sidebaricon/configuration.png"
            alt=""
            className="menuSingleItemIcon"
          />
        ),
        path: "/admin/system-configuration/upazila",
      },
      {
        key: "",
        title: "EmployeeType",
        pathTitle: "EmployeeType",
        icon: (
          <Image
            width={20}
            height={20}
            src="/assets/icons/sidebaricon/configuration.png"
            alt=""
            className="menuSingleItemIcon"
          />
        ),
        path: "/admin/system-configuration/employeetype",
      },
      {
        key: "",
        title: "Designation",
        pathTitle: "Designation",
        icon: (
          <Image
            width={20}
            height={20}
            src="/assets/icons/sidebaricon/configuration.png"
            alt=""
            className="menuSingleItemIcon"
          />
        ),
        path: "/admin/system-configuration/designation",
      },
      {
        key: "",
        title: "OfficeType",
        pathTitle: "OfficeType",
        icon: (
          <Image
            width={20}
            height={20}
            src="/assets/icons/sidebaricon/configuration.png"
            alt=""
            className="menuSingleItemIcon"
          />
        ),
        path: "/admin/system-configuration/officetype",
      },
      {
        key: "",
        title: "Office",
        pathTitle: "Office",
        icon: (
          <Image
            width={20}
            height={20}
            src="/assets/icons/sidebaricon/configuration.png"
            alt=""
            className="menuSingleItemIcon"
          />
        ),
        path: "/admin/system-configuration/office",
      },

      {
        key: "",
        title: "Language",
        pathTitle: "Language",
        icon: (
          <Image
            width={20}
            height={20}
            src="/assets/icons/sidebaricon/configuration.png"
            alt=""
            className="menuSingleItemIcon"
          />
        ),
        path: "/admin/system-configuration/language",
      },
    ],
  },

  {
    key: "",
    title: "কেন্দ্র ব্যবস্থাপনা",
    pathTitle: "কেন্দ্র ব্যবস্থাপনা",
    icon: (
      <Image
        width={20}
        height={20}
        src="/assets/icons/sidebaricon/center.png"
        alt=""
        className="menuSingleItemIcon"
      />
    ),
    path: "#",
    items: [
      {
        key: "",
        title: "শিক্ষা কেন্দ্র",
        pathTitle: "learningcenter",
        icon: (
          <Image
            width={20}
            height={20}
            src="/assets/icons/sidebaricon/center.png"
            alt=""
            className="menuSingleItemIcon"
          />
        ),
        path: "#",
        items: [
          {
            key: "",
            title: "শিক্ষা কেন্দ্র যোগ করুন",
            pathTitle: "learningcenter/add",
            icon: (
              <Image
                width={20}
                height={20}
                src="/assets/icons/sidebaricon/center.png"
                alt=""
                className="menuSingleItemIcon"
              />
            ),
            path: "/admin/center/learningcenter/add",
          },
          {
            key: "",
            title: "শিক্ষা কেন্দ্রের তালিকা",
            pathTitle: "learningcenter/[id]",
            icon: (
              <Image
                width={20}
                height={20}
                src="/assets/icons/sidebaricon/center.png"
                alt=""
                className="menuSingleItemIcon"
              />
            ),
            path: "/admin/center/learningcenter",
          },
        ],
      },
      {
        key: "",
        title: "রিসোর্স সেন্টার",
        pathTitle: "resourcecenter",
        icon: (
          <Image
            width={20}
            height={20}
            src="/assets/icons/sidebaricon/center.png"
            alt=""
            className="menuSingleItemIcon"
          />
        ),
        path: "#",
        items: [
          {
            key: "",
            title: "রিসোর্স সেন্টার যোগ করুন",
            pathTitle: "resourcecenter/add",
            icon: (
              <Image
                width={20}
                height={20}
                src="/assets/icons/sidebaricon/center.png"
                alt=""
                className="menuSingleItemIcon"
              />
            ),
            path: "/admin/center/resourcecenter/add",
          },
          {
            key: "",
            title: "রিসোর্স সেন্টারতালিকা",
            pathTitle: "resourcecenter/[id]",
            icon: (
              <Image
                width={20}
                height={20}
                src="/assets/icons/sidebaricon/center.png"
                alt=""
                className="menuSingleItemIcon"
              />
            ),
            path: "/admin/center/resourcecenter",
          },
        ],
      },
    ],
  },
  {
    key: "",
    title: "শিক্ষার্থী ব্যবস্থাপনা",
    pathTitle: "student-management",
    icon: (
      <Image
        width={20}
        height={20}
        src="/assets/icons/sidebaricon/student.png"
        alt=""
        className="menuSingleItemIcon"
      />
    ),
    path: "#",
    items: [
      {
        key: "",
        title: "শিক্ষার্থী যুক্ত করুন",
        pathTitle: "student-management/add",
        icon: (
          <Image
            width={20}
            height={20}
            src="/assets/icons/sidebaricon/student.png"
            alt=""
            className="menuSingleItemIcon"
          />
        ),
        path: "/admin/student-management/student-info/add",
      },
      {
        key: "",
        title: "শিক্ষার্থীদের তালিকা",
        pathTitle: "student-management/student-info/[id]",
        icon: (
          <Image
            width={20}
            height={20}
            src="/assets/icons/sidebaricon/student.png"
            alt=""
            className="menuSingleItemIcon"
          />
        ),
        path: "/admin/student-management/student-info",
      },
      {
        key: "",
        title: "মূল্যায়ন",
        pathTitle: "student-management/assessment",
        icon: (
          <Image
            width={20}
            height={20}
            src="/assets/icons/sidebaricon/assessment.png"
            alt=""
            className="menuSingleItemIcon"
          />
        ),
        path: "#",
        items: [
          {
            key: "",
            title: "মাসিক মূল্যায়ন",
            icon: (
              <Image
                width={20}
                height={20}
                src="/assets/icons/sidebaricon/assessment.png"
                alt=""
                className="menuSingleItemIcon"
              />
            ),
            path: "/admin/student-management/assessment/monthly-assessment",
          },
          {
            key: "",
            title: "মাসিক মূল্যায়ন তালিকা",
            pathTitle: "assessment/monthly-assessment",
            icon: (
              <Image
                width={20}
                height={20}
                src="/assets/icons/sidebaricon/assessment.png"
                alt=""
                className="menuSingleItemIcon"
              />
            ),
            path: "/admin/student-management/assessment/monthly-assessment-list",
          },
          {
            key: "",
            title: "বার্ষিক মূল্যায়ন তালিকা",
            icon: (
              <Image
                width={20}
                height={20}
                src="/assets/icons/sidebaricon/assessment.png"
                alt=""
                className="menuSingleItemIcon"
              />
            ),
            path: "/admin/student-management/assessment/annual-assessment-list",
          },
        ],
      },
      {
        key: "",
        title: "প্রাথমিক বিদ্যালয়ে ভর্তি",
        pathTitle: "student-management/primary-school-admission",
        icon: (
          <Image
            width={20}
            height={20}
            src="/assets/icons/sidebaricon/admission.png"
            alt=""
            className="menuSingleItemIcon"
          />
        ),
        path: "#",
        items: [
          {
            key: "",
            title: "প্রাথমিক বিদ্যালয়ে ভর্তি",
            icon: (
              <Image
                width={20}
                height={20}
                src="/assets/icons/sidebaricon/admission.png"
                alt=""
                className="menuSingleItemIcon"
              />
            ),
            path: "/admin/student-management/primary-school-admission/add",
          },
          {
            key: "",
            title: "প্রাথমিক বিদ্যালয়ে ভর্তির তালিকা",
            pathTitle: "primary-school-admission/center",
            icon: (
              <Image
                width={20}
                height={20}
                src="/assets/icons/sidebaricon/admission.png"
                alt=""
                className="menuSingleItemIcon"
              />
            ),
            path: "/admin/student-management/primary-school-admission",
          },
        ],
      },
    ],
  },
  {
    key: "",
    title: "শিক্ষক ব্যবস্থাপনা",
    pathTitle: "teacher-management/teacher-info",
    icon: (
      <Image
        width={20}
        height={20}
        src="/assets/icons/sidebaricon/teacher.png"
        alt=""
        className="menuSingleItemIcon"
      />
    ),
    path: "#",
    items: [
      {
        key: "",
        title: "Teacher Information",
        pathTitle: "teacher-management/teacher-info",
        icon: (
          <Image
            width={20}
            height={20}
            src="/assets/icons/sidebaricon/teacher.png"
            alt=""
            className="menuSingleItemIcon"
          />
        ),
        path: "#",
        items: [
          {
            key: "",
            title: "শিক্ষক যুক্ত করুন",
            icon: (
              <Image
                width={20}
                height={20}
                src="/assets/icons/sidebaricon/teacher.png"
                alt=""
                className="menuSingleItemIcon"
              />
            ),
            path: "/admin/teacher-management/teacher-info/add",
          },
          {
            key: "",
            title: "শিক্ষকগণের তালিকা",
            pathTitle: "teacher-management/teacher-info/[id]",

            icon: (
              <Image
                width={20}
                height={20}
                src="/assets/icons/sidebaricon/teacher.png"
                alt=""
                className="menuSingleItemIcon"
              />
            ),
            path: "/admin/teacher-management/teacher-info",
          },
        ],
      },
      {
        key: "",
        title: "Teacher Evaluation",
        pathTitle: "teacher-management",
        icon: (
          <Image
            width={20}
            height={20}
            src="/assets/icons/sidebaricon/teacher.png"
            alt=""
            className="menuSingleItemIcon"
          />
        ),
        path: "#",
        items: [
          {
            key: "",
            title: "শিক্ষক মূল্যায়ন",
            icon: (
              <Image
                width={20}
                height={20}
                src="/assets/icons/sidebaricon/teacher.png"
                alt=""
                className="menuSingleItemIcon"
              />
            ),
            path: "/admin/teacher-management/teacher-evaluation/add",
          },
          {
            key: "",
            title: "মূল্যায়ন সারাংশ",
            pathTitle: "teacher-management/teacher-evaluation-summary",
            icon: (
              <Image
                width={20}
                height={20}
                src="/assets/icons/sidebaricon/teacher.png"
                alt=""
                className="menuSingleItemIcon"
              />
            ),
            path: "/admin/teacher-management/teacher-evaluation-summary",
          },
        ],
      },
    ],
  },

  {
    key: "",
    title: "কর্মকর্তা ব্যবস্থাপনা",
    icon: (
      <Image
        width={20}
        height={20}
        src="/assets/icons/sidebaricon/employee.png"
        alt=""
        className="menuSingleItemIcon"
      />
    ),
    path: "/admin",
    items: [
      {
        key: "",
        title: " কর্মচারী যুক্ত করুন ",
        icon: (
          <Image
            src="/assets/icons/sidebaricon/employee.png"
            alt=""
            className="menuSingleItemIcon"
            width={20}
            height={20}
          />
        ),
        path: "/admin/employee-management/add",
      },
      {
        key: "",
        title: "কর্মচারী তালিকা",
        pathTitle: "employee-management/[id]",
        icon: (
          <Image
            src="/assets/icons/sidebaricon/employee.png"
            alt=""
            className="menuSingleItemIcon"
            width={20}
            height={20}
          />
        ),
        path: "/admin/employee-management",
      },
    ],
  },

  {
    key: "",
    title: "ব্যবহারকারী ব্যবস্থাপনা",
    icon: (
      <Image
        width={20}
        height={20}
        src="/assets/icons/sidebaricon/user.png"
        alt=""
        className="menuSingleItemIcon"
      />
    ),
    path: "/admin",
    items: [
      {
        key: "",
        title: "ব্যবহারকারী যুক্ত করুন",
        icon: (
          <Image
            width={20}
            height={20}
            src="/assets/icons/sidebaricon/user.png"
            alt=""
            className="menuSingleItemIcon"
          />
        ),
        path: "/admin/user-management/user/add",
      },
      {
        key: "",
        title: "ব্যবহারকারী তালিকা",
        pathTitle: "user-management/user/[id]",
        icon: (
          <Image
            src="/assets/icons/sidebaricon/user.png"
            alt=""
            className="menuSingleItemIcon"
            width={20}
            height={20}
          />
        ),
        path: "/admin/user-management/user",
      },
    ],
  },
  {
    key: "",
    title: "permission",
    pathTitle: "permission",
    icon: (
      <Image
        width={20}
        height={20}
        src="/assets/icons/sidebaricon/user.png"
        alt=""
        className="menuSingleItemIcon"
      />
    ),
    path: "/permission",
    items: [],
  },
  {
    key: "",
    title: "পরিদর্শন ব্যবস্থাপনা",
    icon: (
      <Image
        width={20}
        height={20}
        src="/assets/icons/sidebaricon/poridorshon.png"
        alt=""
        className="menuSingleItemIcon"
      />
    ),
    path: "#",
    items: [
      {
        key: "",
        title: "সদর কার্যালয়",
        // pathTitle: "সদর কার্যালয়",
        pathTitle: "inspection-management/head-office",
        icon: (
          <Image
            width={20}
            height={20}
            src="/assets/icons/sidebaricon/poridorshon.png"
            alt=""
            className="menuSingleItemIcon"
          />
        ),
        path: "#",
        items: [
          {
            key: "",
            title: "ভ্রমণ পরিকল্পনা",
            icon: (
              <Image
                width={20}
                height={20}
                src="/assets/icons/sidebaricon/poridorshon.png"
                alt=""
                className="menuSingleItemIcon"
              />
            ),
            path: "/admin/inspection-management/head-office/tour-planning/add",
          },
          {
            key: "",
            title: "পরিকল্পনার তালিকা",
            pathTitle: "head-office/tour-planning/[id]",
            icon: (
              <Image
                width={20}
                height={20}
                src="/assets/icons/sidebaricon/poridorshon.png"
                alt=""
                className="menuSingleItemIcon"
              />
            ),
            path: "/admin/inspection-management/head-office/tour-planning",
          },
          {
            key: "",
            title: "অনুমোদন",
            icon: (
              <Image
                src="/assets/icons/sidebaricon/poridorshon.png"
                alt=""
                width={20}
              />
            ),
            path: "/admin/inspection-management/head-office/tour-planning/approved",
            pathTitle:
              "inspection-management/head-office/tour-planning/approved",
          },

          {
            key: "",
            title: "শিক্ষা কেন্দ্র পরিদর্শন",
            pathTitle: "head-office/learning-center-inspection/[id]",
            icon: (
              <Image
                src="/assets/icons/sidebaricon/poridorshon.png"
                alt=""
                className="menuSingleItemIcon"
              />
            ),
            path: "/admin/inspection-management/head-office/learning-center-inspection",
          },
          {
            key: "",
            title: "রিসোর্স কেন্দ্র পরিদর্শন",
            pathTitle: "head-office/resource-center-inspection/[id]",
            icon: (
              <Image
                src="/assets/icons/sidebaricon/poridorshon.png"
                alt=""
                className="menuSingleItemIcon"
              />
            ),
            path: "/admin/inspection-management/head-office/resource-center-inspection",
          },
        ],
      },
      {
        key: "",
        title: "বিভাগীয় কার্যালয়",
        // pathTitle: "divisional-office/tour-planning",
        pathTitle: "inspection-management/divisional-office",
        icon: (
          <Image
            width={20}
            height={20}
            src="/assets/icons/sidebaricon/poridorshon.png"
            alt=""
            className="menuSingleItemIcon"
          />
        ),
        path: "#",
        items: [
          {
            key: "",
            title: "বার্ষিক পরিদর্শন লক্ষ্য সূচী",
            icon: (
              <Image
                width={20}
                height={20}
                src="/assets/icons/sidebaricon/poridorshon.png"
                alt=""
                className="menuSingleItemIcon"
              />
            ),
            path: "/admin/inspection-management/divisional-office/annual-inspection-target/add",
            pathTitle: "",
          },
          {
            key: "",
            title: "বার্ষিক পরিদর্শনের তালিকা",
            pathTitle: "divisional-office/annual-inspection-target/[id]",
            icon: (
              <Image
                width={20}
                height={20}
                src="/assets/icons/sidebaricon/poridorshon.png"
                alt=""
                className="menuSingleItemIcon"
              />
            ),
            path: "/admin/inspection-management/divisional-office/annual-inspection-target",
          },
          {
            key: "",
            title: "শিক্ষা কেন্দ্র পরিদর্শন",
            pathTitle: "divisional-office/learning-center-inspection",
            icon: (
              <Image
                src="/assets/icons/sidebaricon/poridorshon.png"
                alt=""
                className="menuSingleItemIcon"
              />
            ),
            path: "/admin/inspection-management/divisional-office/learning-center-inspection",
          },
          {
            key: "",
            title: "রিসোর্স কেন্দ্র পরিদর্শন",
            pathTitle: "divisional-office/resource-center-inspection",
            icon: (
              <Image
                src="/assets/icons/sidebaricon/poridorshon.png"
                alt=""
                className="menuSingleItemIcon"
              />
            ),
            path: "/admin/inspection-management/divisional-office/resource-center-inspection",
          },
        ],
      },
    ],
  },
  {
    key: "",
    title: "Monitoring Management",
    pathTitle: "monitoring-management",
    icon: (
      <Image
        width={20}
        height={20}
        src="/assets/icons/sidebaricon/monitoring.png"
        alt=""
        className="menuSingleItemIcon"
      />
    ),
    path: "#",
    items: [
      {
        key: "",
        title: "Learning Center Inspection",
        pathTitle: "monitoring-management/learning-center-inspection/[id]",
        icon: (
          <Image
            width={20}
            height={20}
            src="/assets/icons/sidebaricon/monitoring.png"
            alt=""
            className="menuSingleItemIcon"
          />
        ),
        path: "/admin/monitoring-management/learning-center-inspection",
      },
      {
        key: "",
        title: "Resource Center Inspection",
        pathTitle: "monitoring-management/resource-center-inspection/[id]",
        icon: (
          <Image
            width={20}
            height={20}
            src="/assets/icons/sidebaricon/monitoring.png"
            alt=""
            className="menuSingleItemIcon"
          />
        ),
        path: "/admin/monitoring-management/resource-center-inspection",
      },
      {
        key: "",
        title: "Inspection Target Vs Achievement",
        pathTitle: "Inspection Target Vs Achievement",
        icon: (
          <Image
            width={20}
            height={20}
            src="/assets/icons/sidebaricon/monitoring.png"
            alt=""
            className="menuSingleItemIcon"
          />
        ),
        path: "/admin/monitoring-management/inspection-target-vs-achievement",
      },
      // {
      //     key: LangSetUpForMenu.monitoring_management.submodule.center_location.key,
      //     title: "Center Location",
      //     pathTitle: "Center Location",
      //     icon: <Image width={20} height={20} src="/assets/icons/sidebaricon/monitoring.png" alt="" className="menuSingleItemIcon" />,
      //     path: "/admin/monitoring-management/center-location",
      // },
    ],
  },
  {
    key: "",
    title: "অর্থ ব্যবস্থাপনা",
    pathTitle: "",
    icon: (
      <Image
        width={20}
        height={20}
        src="/assets/icons/sidebaricon/money.png"
        alt=""
        className="menuSingleItemIcon"
      />
    ),
    path: "#",
    items: [
      {
        key: "",
        title: "অর্থ বছর",
        pathTitle: "finance-management/financial-year",
        icon: (
          <Image
            width={20}
            height={20}
            src="/assets/icons/sidebaricon/money.png"
            alt=""
            className="menuSingleItemIcon"
          />
        ),
        path: "/admin/finance-management/financial-year",
      },
      {
        key: "",
        title: "খাত/উপখাত",
        pathTitle: "finance-management/sector",
        icon: (
          <Image
            width={20}
            height={20}
            src="/assets/icons/sidebaricon/money.png"
            alt=""
            className="menuSingleItemIcon"
          />
        ),
        path: "/admin/finance-management/sector",
      },
      {
        key: "",
        title: "খাতভিত্তিক বাজেট",
        pathTitle: "finance-management/sectorwise-budget",
        icon: (
          <Image
            width={20}
            height={20}
            src="/assets/icons/sidebaricon/money.png"
            alt=""
            className="menuSingleItemIcon"
          />
        ),
        path: "/admin/finance-management/sectorwise-budget",
      },
      {
        key: "",
        title: "Bill Prepare",
        pathTitle: "finance-management/bill-management/bill-prepare",
        icon: (
          <Image
            width={20}
            height={20}
            src="/assets/icons/sidebaricon/money.png"
            alt=""
            className="menuSingleItemIcon"
          />
        ),
        path: "/admin/finance-management/bill-management/bill-prepare",
      },
      {
        key: "",
        title: "বাজেট সংশোধন",
        pathTitle: "finance-management/budget-amendment/[id]",
        icon: (
          <Image
            width={20}
            height={20}
            src="/assets/icons/sidebaricon/money.png"
            alt=""
            className="menuSingleItemIcon"
          />
        ),
        path: "/admin/finance-management/budget-amendment",
      },
    ],
  },
  {
    key: "",
    title: "Website",
    pathTitle: "",
    icon: (
      <Image
        width={20}
        height={20}
        src="/assets/icons/sidebaricon/web-icon.png"
        alt=""
        className="menuSingleItemIcon"
      />
    ),
    path: "#",
    items: [
      {
        key: "",
        title: "Banner",
        pathTitle: "website/banner",
        icon: (
          <Image
            width={20}
            height={20}
            src="/assets/icons/sidebaricon/web-icon.png"
            alt=""
            className="menuSingleItemIcon"
          />
        ),
        path: "/admin/website/banner",
      },
      {
        key: "",
        title: "Notice",
        pathTitle: "website/notice",
        icon: (
          <Image
            width={20}
            height={20}
            src="/assets/icons/sidebaricon/web-icon.png"
            alt=""
            className="menuSingleItemIcon"
          />
        ),
        path: "/admin/website/notice",
      },
      {
        key: "",
        title: "Important day",
        pathTitle: "website/important-day",
        icon: (
          <Image
            width={20}
            height={20}
            src="/assets/icons/sidebaricon/web-icon.png"
            alt=""
            className="menuSingleItemIcon"
          />
        ),
        path: "/admin/website/important-day",
      },
      {
        key: "",
        title: "Gallery",
        pathTitle: "website/gallery",
        icon: (
          <Image
            width={20}
            height={20}
            src="/assets/icons/sidebaricon/web-icon.png"
            alt=""
            className="menuSingleItemIcon"
          />
        ),
        path: "/admin/website/gallery",
      },
      {
        key: "",
        title: "Important Links",
        pathTitle: "website/important-links",
        icon: (
          <Image
            width={20}
            height={20}
            src="/assets/icons/sidebaricon/web-icon.png"
            alt=""
            className="menuSingleItemIcon"
          />
        ),
        path: "/admin/website/important-links",
      },
      {
        key: "",
        title: "Person",
        pathTitle: "website/person",
        icon: (
          <Image
            width={20}
            height={20}
            src="/assets/icons/sidebaricon/web-icon.png"
            alt=""
            className="menuSingleItemIcon"
          />
        ),
        path: "/admin/website/person",
      },
      {
        key: "",
        title: "Video Links",
        pathTitle: "website/video-links",
        icon: (
          <Image
            width={20}
            height={20}
            src="/assets/icons/sidebaricon/web-icon.png"
            alt=""
            className="menuSingleItemIcon"
          />
        ),
        path: "/admin/website/video-links",
      },
      {
        key: "",
        title: "Hotline",
        pathTitle: "website/hotline",
        icon: (
          <Image
            width={20}
            height={20}
            src="/assets/icons/sidebaricon/web-icon.png"
            alt=""
            className="menuSingleItemIcon"
          />
        ),
        path: "/admin/website/hotline",
      },
      {
        key: "",
        title: "About",
        pathTitle: "website/about",
        icon: (
          <Image
            width={20}
            height={20}
            src="/assets/icons/sidebaricon/web-icon.png"
            alt=""
            className="menuSingleItemIcon"
          />
        ),
        path: "/admin/website/about",
      },
      {
        key: "",
        title: "Resource Center",
        pathTitle: "website/web-resource-center",
        icon: (
          <Image
            width={20}
            height={20}
            src="/assets/icons/sidebaricon/web-icon.png"
            alt=""
            className="menuSingleItemIcon"
          />
        ),
        path: "/admin/website/web-resource-center",
      },
      {
        key: "",
        title: "Gallery Video Links",
        pathTitle: "website/gallery-video-links",
        icon: (
          <Image
            width={20}
            height={20}
            src="/assets/icons/sidebaricon/web-icon.png"
            alt=""
            className="menuSingleItemIcon"
          />
        ),
        path: "/admin/website/gallery-video-links",
      },
      {
        key: "",
        title: "Sociol Social",
        pathTitle: "website/sociol-social",
        icon: (
          <Image
            width={20}
            height={20}
            src="/assets/icons/sidebaricon/web-icon.png"
            alt=""
            className="menuSingleItemIcon"
          />
        ),
        path: "/admin/website/sociol-social",
      },
    ],
  },
  {
    key: "",
    title: "প্রতিবেদন",
    pathTitle: "",
    icon: (
      <Image
        width={20}
        height={20}
        src="/assets/icons/sidebaricon/report.png"
        alt=""
        className="menuSingleItemIcon"
      />
    ),
    path: "#",
    items: [
      {
        key: "",
        title: "অ্যাডভান্সড প্রতিবেদন",
        pathTitle: "অ্যাডভান্সড প্রতিবেদন",
        icon: (
          <Image
            width={20}
            height={20}
            src="/assets/icons/sidebaricon/report.png"
            alt=""
            className="menuSingleItemIcon"
          />
        ),
        path: "/admin/reports/advanced-report",
      },
      {
        key: "",
        title: "প্রাথমিক বিদ্যালয়ে ভর্তির প্রতিবেদন",
        pathTitle: "প্রাথমিক বিদ্যালয়ে ভর্তির প্রতিবেদন",
        icon: (
          <Image
            width={20}
            height={20}
            src="/assets/icons/sidebaricon/report.png"
            alt=""
            className="menuSingleItemIcon"
          />
        ),
        path: "/admin/reports/primary-school-admission-report",
      },
      {
        key: "",
        title: "কেন্দ্র পরিদর্শন প্রতিবেদন",
        pathTitle: "কেন্দ্র পরিদর্শন প্রতিবেদন",
        icon: (
          <Image
            width={20}
            height={20}
            src="/assets/icons/sidebaricon/report.png"
            alt=""
            className="menuSingleItemIcon"
          />
        ),
        path: "/admin/reports/center-inspection-report",
      },
      {
        key: "",
        title: "অর্থ ব্যবস্থাপনা প্রতিবেদন",
        pathTitle: "অর্থ ব্যবস্থাপনা প্রতিবেদন",
        icon: (
          <Image
            width={20}
            height={20}
            src="/assets/icons/sidebaricon/report.png"
            alt=""
            className="menuSingleItemIcon"
          />
        ),
        path: "/admin/reports/financial-management-report",
      },
    ],
  },
];
