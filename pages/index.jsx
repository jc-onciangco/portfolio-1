import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import HeroSection from '../src/components/HeroSection/';
import SelectedWorks from '../src/components/SelectedWorksSection';
import BasicInfoSection from '../src/components/BasicInfoSection';
import SmoothScrollLayout from '../src/layouts/SmoothScrollLayout';
import MainLayout from '../src/layouts/MainLayout';
export default function Home() {
  return (
    <div className="bg-[#EAE7D6]">
      <MainLayout>
        <HeroSection  />
        <BasicInfoSection />
        <SelectedWorks />
      </MainLayout>
    </div>
  )
}
