import React, { useState } from 'react';
import ProfileCom from "./component/ProfileCom";
import InterestCom from "./component/InterestCom";
import SettingCom from "./component/SettingCom";

let tabList = [
    {
        tabName: "Profile",
        component: () => <ProfileCom />,
    },
    {
        tabName: "Interest",
        component: () => <InterestCom />,
    },
    {
        tabName: "Settings",
        component: () => <SettingCom />,
    },
];

const TabForm = () => {
    const [currentTabIndec, setCurrentTabIndex] = useState(tabList[0].tabName);
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleTabNavigation = (tabName, index) => {
        setCurrentIndex(index);
        setCurrentTabIndex(tabName);
    };

    const renderComponent = () => {
        const activeTab = tabList.find((tab) => tab.tabName === currentTabIndec);
        if (activeTab) {
            return activeTab?.component();
        } else {
            return;
        }
    };

    const handleNextIndex = (curInd) => {
        setCurrentIndex(curInd + 1);
        setCurrentTabIndex(tabList[curInd + 1].tabName);
    };

    const handlePreviousIndex = (curInd) => {
        setCurrentIndex((prev) => {
            return prev - 1;
        });
        setCurrentTabIndex(tabList[curInd - 1].tabName);
    };

    const buttonDisplay = () => {
        return (
            <>
                {currentIndex === 0 ? (
                    <>
                        {" "}
                        <button onClick={() => handleNextIndex(currentIndex)}>
                            Next
                        </button>{" "}
                    </>
                ) : currentIndex !== tabList.length - 1 ? (
                    <>
                        {" "}
                        <button onClick={() => handleNextIndex(currentIndex)}>Next</button>
                        <button onClick={() => handlePreviousIndex(currentIndex)}>
                            Previous
                        </button>
                    </>
                ) : (
                    <>
                        <button onClick={() => handlePreviousIndex(currentIndex)}>
                            Previous
                        </button>{" "}
                        <button>Submit</button>
                    </>
                )}
            </>
        );
    };


    return (
        <div>
            <h1>Tab Form</h1>
            <div className={`button-order`}>
                {tabList.map((tab, index) => {
                    return (
                        <>
                            <div>
                                <button
                                    key={tab}
                                    onClick={() => handleTabNavigation(tab?.tabName, index)}
                                >
                                    {tab?.tabName}
                                </button>
                            </div>

                        </>
                    );
                })}
            </div>
            <div className="childRender">{renderComponent()}</div>
            {buttonDisplay()}
        </div>
    );
};

export default TabForm;