import React, { useState } from "react";
import RmLayout from "../../assets/components/layout/RmLayout";
import { PageContainer } from "../../assets/components/layout/contents/PageContainer";

const RmLayoutPage = ({ layout, title, children }) => {
  const [activeMenuIndex, setActiveMenuIndex] = useState(0);
  const [activeLinkIndex, setActiveLinkIndex] = useState(1);

  const menuItems = [
    {
      key: "home",
      label: "홈",
      iconName: "ic_home",
      onClick: () => {
        setActiveMenuIndex(0);
      },
    },
    {
      key: "search",
      label: "기업 분석",
      iconName: "ic_company",
      onClick: () => {
        setActiveMenuIndex(1);
      },
    },
    {
      key: "customer",
      label: "가망 고객 발굴",
      iconName: "ic_customer",
      onClick: () => {
        setActiveMenuIndex(2);
      },
    },
  ];

  const quickItems = [
    {
      key: "won",
      label: "기업금융 WON",
      url: "./",
      onClick: () => {
        setActiveLinkIndex(0);
      },
    },
    {
      key: "insight",
      label: "빅 인사이트(Big Insight)",
      url: "./",
      onClick: () => {
        setActiveLinkIndex(1);
      },
    },
    {
      key: "kpi",
      label: "RM KPI",
      url: "./",
      onClick: () => {
        setActiveLinkIndex(2);
      },
    },
    {
      key: "advisor",
      label: "정책자금 어드바이저",
      url: "./",
      onClick: () => {
        setActiveLinkIndex(3);
      },
    },
    {
      key: "company",
      label: "우리 WON 뱅킹 기업",
      url: "./",
      onClick: () => {
        setActiveLinkIndex(4);
      },
    },
    {
      key: "info",
      label: "우리inforium(기업정보)",
      url: "./",
      onClick: () => {
        setActiveLinkIndex(5);
      },
    },
  ];
  return (
    <RmLayout
      headerProps={{
        headerTitle: "RM 영업지원 포탈",
        hasAlarm: true,
        notificationCount: 2,
      }}
      lnbProps={{
        hasLnb: true,
        hideToggleButton: true,
        menuItems,
        activeMenuIndex,
        quickTitle: "전문가 시스템 바로가기",
        linkItems: quickItems,
        activeLinkIndex,
      }}
      footerProps={{
        hasFooter: true,
      }}
    >
      <PageContainer layout={layout} title={title}>
        {children}
      </PageContainer>
    </RmLayout>
  );
};

export default RmLayoutPage;
