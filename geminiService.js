// Placeholder for Gemini API integration
// Replace with actual Gemini API calls when ready

export const getGeminiResponse = async (message) => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 800));

  // Demo responses based on keywords
  const responses = {
    'समृद्ध': 'समृद्ध नेपाल हाम्रो मुख्य लक्ष्य हो। यसका लागि हामी आर्थिक विकास, कृषि उन्नति, पर्यटन विस्तार र विनिर्माण क्षेत्रमा ध्यान दिएको छौं।',
    'स्वरोजगार': 'युवा स्वरोजगार आমाद्वारा प्राथमिकता पाएको विषय हो। हामी लघु व्यवसाय, प्रविधिगत प्रशिक्षण र साहकारी सुविधा विस्तारका माध्यमले यो सम्भव गर्न चाहन्छौं।',
    'शिक्षा': 'शिक्षामा गुणात्मक सुधार आवश्यक छ। प्रविधि भित्काइँदै पाठ्यक्रम आधुनिकीकरण गर्न र शिक्षकको दक्षता बढाउन हामी प्रतिबद्ध छौं।',
    'नेपाल': 'नेपाल एक सम्भावनाशील देश हो। हामीले बहुराष्ट्रीय सीमान्त क्षेत्र, जलविद्युत सम्पदा र सांस्कृतिक विविधताको सदुपयोग गर्न चाहन्छौं।',
    'default': 'यो एक महत्त्वपूर्ण प्रश्न हो। अधिक विस्तार सहित भन्न चाहनु भएमा कृपया अलैनै जिज्ञासा गर्नुहोस्।'
  };

  // Check for keywords and return appropriate response
  for (const [key, response] of Object.entries(responses)) {
    if (key !== 'default' && message.toLowerCase().includes(key)) {
      return response;
    }
  }

  return responses.default;
};
