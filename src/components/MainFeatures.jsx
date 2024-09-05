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
    <div className='relative px-[35px] py-[20px]'>
      <h2 className='font-bold text-7xl px-[47px]'>
        Everything for your need
      </h2>
      <div className='flex py-[30px]'>
        <div className='m-auto'>
          <img className='w-[225px] h-[225px]' src={MC} alt="Planner" />
          <h1 
            className='font-bold text-2xl py-[20px] cursor-pointer'
            onClick={togglePlannerOverlay}>
            Planner
          </h1>
          <p className='text-lg'>
            Effortlessly organize 
            <br />and manage tasks 
            <br />for timely execution.
          </p>
        </div>
        <div className='m-auto'>
          <img className='w-[225px] h-[225px]' src={MC} alt="Work Flow" />
          <h1 
            className='font-bold text-2xl py-[20px] cursor-pointer'
            onClick={toggleWorkflowOverlay}>
            Work Flow
          </h1>
          <p className='text-lg'>
            Streamline 
            <br />processes and 
            <br />enhance efficiency.
          </p>
        </div>
        <div className='m-auto'>
          <img className='w-[225px] h-[225px]' src={MC} alt="Dashboard" />
          <h1 
            className='font-bold text-2xl py-[20px] cursor-pointer'
            onClick={toggleDashboardOverlay}>
            Dashboard
          </h1>
          <p className='text-lg'>
            Visualize your 
            <br />achievements with 
            <br />intuitive charts.
          </p>
        </div>
        <div className='m-auto'>
          <img className='w-[225px] h-[225px]' src={MC} alt="Customization" />
          <h1 
            className='font-bold text-2xl py-[20px] cursor-pointer'
            onClick={toggleCustomisationOverlay}>
            Customization
          </h1>
          <p className='text-lg '>
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
