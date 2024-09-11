import React, { useState } from 'react';
import MC from '../assets/MC.png'; 
import PlannerOverlay from '../assets/BOX.jpg'; // Replace with your Planner overlay image path
import WorkflowOverlay from '../assets/BOX.jpg'; // Replace with your Workflow overlay image path
import DashboardOverlay from '../assets/BOX.jpg'; // Replace with your Dashboard overlay image path
import CustomisationOverlay from '../assets/BOX.jpg'; // Replace with your Customisation overlay image path

const MainFeatures = () => {
  const [isPlannerOverlayVisible, setIsPlannerOverlayVisible] = useState(false);
  const [isWorkflowOverlayVisible, setIsWorkflowOverlayVisible] = useState(false);
  const [isDashboardOverlayVisible, setIsDashboardOverlayVisible] = useState(false);
  const [isCustomisationOverlayVisible, setIsCustomisationOverlayVisible] = useState(false);

  const togglePlannerOverlay = () => {
    setIsPlannerOverlayVisible(!isPlannerOverlayVisible);
  };

  const toggleWorkflowOverlay = () => {
    setIsWorkflowOverlayVisible(!isWorkflowOverlayVisible);
  };

  const toggleDashboardOverlay = () => {
    setIsDashboardOverlayVisible(!isDashboardOverlayVisible);
  };

  const toggleCustomisationOverlay = () => {
    setIsCustomisationOverlayVisible(!isCustomisationOverlayVisible);
  };

  return (
    <div className='xxs:px-[10px]
                    xs:px-[10px]
                    sm:px-[10px]
                    md:px-[10px]
                    lg:px-[70px]
                    xl:px-[70px]'>
      <h2 className='xxs:text-[25px] xxs:text-center
                      xs:text-[38px] xs:text-center
                      sm:text-[52px] sm:text-center
                      md:text-[62px] md:text-center
                      lg:text-[70px] 
                      xl:text-7xl xl:px-[47px] xl:text-left
                      font-bold'>
        Everything for your need
      </h2>
      <div className='xxs:gap-6 xxs:justify-center xxs:flex xxs:flex-wrap
                      xs:gap-10 xs:justify-center xs:flex xs:flex-wrap
                      sm:gap-10 sm:justify-center sm:flex sm:flex-wrap
                      md:gap-10 md:justify-center md:flex md:flex-wrap
                      lg:gap-10 lg:justify-center lg:flex lg:flex-wrap
                      xl:py-[30px] xl:flex xl:justify-center'>
        {/* Feature 1 - Planner */}
        <div className='flex flex-col items-center'>
          <img className='xxs:w-[70px] 
                          xs:w-[100px]
                          sm:w-[130px]
                          md:w-[160px]
                          lg:w-[120px]
                          xl:w-[225px] object-cover' src={MC} alt="Planner" />
          <h1 
            className='xxs:text-[18px] xxs:text-center
                        xs:text-[24px] xs:text-center
                        sm:text-[30px] sm:text-center
                        md:text-[36px] md:text-center
                        lg:text-[35px] lg:text-left
                        xl:text-2xl xl:py-[20px]
                        font-bold cursor-pointer'
            onClick={togglePlannerOverlay}>
            Planner
          </h1>
          <p className='xxs:text-[13px] xxs:text-center
                        xs:text-[20px] xs:text-center
                        sm:text-[27px] sm:text-center
                        md:text-[34px] md:text-center
                        lg:text-lg lg:text-center
                        xl:text-lg'>
            Effortlessly organize 
            <br />and manage tasks 
            <br />for timely execution.
          </p>
        </div>

        {/* Feature 2 - Workflow */}
        <div className='flex flex-col items-center'>
          <img className='xxs:w-[70px] 
                          xs:w-[100px]
                          sm:w-[130px]
                          md:w-[160px]
                          lg:w-[120px]
                          xl:w-[225px] xl:h-[225px] object-cover' src={MC} alt="Work Flow" />
          <h1 
            className='xxs:text-[18px] 
                        xs:text-[24px]
                        sm:text-[30px]
                        md:text-[36px] md:text-center
                        lg:text-[35px] lg:text-left
                        xl:text-2xl xl:py-[20px]
                        font-bold cursor-pointer'
            onClick={toggleWorkflowOverlay}>
            Work Flow
          </h1>
          <p className='xxs:text-[13px] xxs:text-center
                        xs:text-[20px] xs:text-center
                        sm:text-[27px] sm:text-center
                        md:text-[34px] md:text-center
                        lg:text-lg lg:text-center
                        xl:text-lg'>
            Streamline 
            <br />processes and 
            <br />enhance efficiency.
          </p>
        </div>

        {/* Feature 3 - Dashboard */}
        <div className='flex flex-col items-center'>
          <img className='xxs:w-[70px] 
                          xs:w-[100px]
                          sm:w-[130px]
                          md:w-[160px]
                          lg:w-[120px]
                          xl:w-[225px] xl:h-[225px] object-cover' src={MC} alt="Dashboard" />
          <h1 
            className='xxs:text-[18px] 
                        xs:text-[24px]
                        sm:text-[30px]
                        md:text-[36px] md:text-center
                        lg:text-[35px] lg:text-left
                        xl:text-2xl xl:py-[20px]
                        font-bold cursor-pointer'
            onClick={toggleDashboardOverlay}>
            Dashboard
          </h1>
          <p className='xxs:text-[13px] xxs:text-center
                        xs:text-[20px] xs:text-center
                        sm:text-[27px] sm:text-center
                        md:text-[34px] md:text-center
                        lg:text-lg lg:text-center
                        xl:text-lg'>
            Visualize your 
            <br />achievements with 
            <br />intuitive charts.
          </p>
        </div>

        {/* Feature 4 - Customization */}
        <div className='flex flex-col items-center'>
          <img className='xxs:w-[70px] 
                          xs:w-[100px]
                          sm:w-[130px]
                          md:w-[160px]
                          lg:w-[120px]
                          xl:w-[225px] xl:h-[225px] object-cover' src={MC} alt="Customization" />
          <h1 
            className='xxs:text-[18px] xxs:text-center
                        xs:text-[24px] xs:text-center
                        sm:text-[30px] sm:text-center
                        md:text-[36px] md:text-center
                        lg:text-[35px] lg:text-left
                        xl:text-2xl xl:py-[20px]
                        font-bold cursor-pointer'
            onClick={toggleCustomisationOverlay}>
            Customization
          </h1>
          <p className='xxs:text-[13px] xxs:text-center
                        xs:text-[20px] xs:text-center
                        sm:text-[27px] sm:text-center
                        md:text-[34px] md:text-center
                        lg:text-lg lg:text-center
                        xl:text-lg'>
            Tailor your experience 
            <br />with flexible 
            <br />customization options.
          </p>
        </div>
      </div>

      {/* Planner Overlay */}
      {isPlannerOverlayVisible && (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
          <div className='relative'>
            <img src={PlannerOverlay} alt="Planner Overlay" className='w-[1150px] h-[650px] rounded-lg' />
            <button 
              onClick={togglePlannerOverlay} 
              className='absolute top-0 right-3 text-white text-2xl'>
              &times;
            </button>
          </div>
        </div>
      )}

      {/* Workflow Overlay */}
      {isWorkflowOverlayVisible && (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
          <div className='relative'>
            <img src={WorkflowOverlay} alt="Workflow Overlay" className='w-[1150px] h-[650px] rounded-lg' />
            <button 
              onClick={toggleWorkflowOverlay} 
              className='absolute top-0 right-3 text-white text-2xl'>
              &times;
            </button>
          </div>
        </div>
      )}

      {/* Dashboard Overlay */}
      {isDashboardOverlayVisible && (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
          <div className='relative'>
            <img src={DashboardOverlay} alt="Dashboard Overlay" className='w-[1150px] h-[650px] rounded-lg' />
            <button 
              onClick={toggleDashboardOverlay} 
              className='absolute top-0 right-3 text-white text-2xl'>
              &times;
            </button>
          </div>
        </div>
      )}

      {/* Customization Overlay */}
      {isCustomisationOverlayVisible && (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
          <div className='relative'>
            <img src={CustomisationOverlay} alt="Customization Overlay" className='w-[1150px] h-[650px] rounded-lg' />
            <button 
              onClick={toggleCustomisationOverlay} 
              className='absolute top-0 right-3 text-white text-2xl'>
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default MainFeatures;
