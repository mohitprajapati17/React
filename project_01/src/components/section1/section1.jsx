

import ContentSection from "./ContentSection";
import ImageSection from "./ImageSection";

function Section1() {
  return (
    <div className ='h-[90vh]  flex items-center justify-between p-8  gap-2'>
      <ContentSection />
      <ImageSection />
    </div>
  )
}

export default Section1