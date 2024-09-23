// task 5, main.ts

// Define the interfaces with brand properties for nominal typing
interface MajorCredits {
    credits: number;
    _majorBrand: void;
  }
  
  interface MinorCredits {
    credits: number;
    _minorBrand: void;
  }
  
  // Function to sum major credits
  function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
    return {
      credits: subject1.credits + subject2.credits,
      _majorBrand: undefined,
    };
  }
  
  // Function to sum minor credits
  function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
    return {
      credits: subject1.credits + subject2.credits,
      _minorBrand: undefined,
    };
  }
  
  // Testing:
  const major1: MajorCredits = { credits: 20, _majorBrand: undefined };
  const major2: MajorCredits = { credits: 22, _majorBrand: undefined };
  const totalMajor = sumMajorCredits(major1, major2);
  console.log(`Total Major Credits: ${totalMajor.credits}`);
  
  const minor1: MinorCredits = { credits: 10, _minorBrand: undefined };
  const minor2: MinorCredits = { credits: 12, _minorBrand: undefined };
  const totalMinor = sumMinorCredits(minor1, minor2);
  console.log(`Total Minor Credits: ${totalMinor.credits}`);
