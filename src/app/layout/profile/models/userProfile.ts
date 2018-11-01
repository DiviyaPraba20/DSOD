export interface UserProfileData {
  id: string;
  full_name: string;
  email: string;
  contact_email: string;
  phone: string;
  sex: string;
  street_address: string;
  city: string;
  state: string;
  zip: string;
  create_time: number;
  status: string;
  residency_id: string;
  dental_school_id: string;
  is_student: string;
  is_linkedin: string;
  photo_url: string;
  resume_url: string;
  educations: Education[];
  experiences: Experience[];
  profileResidency: ProfileResidency[];
  practiceAddress: {
    id: string;
    address1: string;
    address2: string;
    zipCode: string;
    city: string;
    states: string;
    email: string;
    user_id: string;
  };
  photo_album: {
    id: string;
    photo: string;
    photo_name: string;
    create_time: number;
    email: string;
    user_id: string;
  };
  document_library: {
    id: string;
    document: string;
    document_name: string;
    create_time: number;
    email: string;
    user_id: string;
  };
  specialty: {
    id: string;
    name: string;
    description: string;
  };
}

export interface Education {
  id: string;
  dental_school: {
    id: string;
    name: string;
  };
  school_name: string;
  major: string;
  create_time: number;
  start_time: number;
  end_time: number;
  email: string;
  types: string;
}

export interface Experience {
  id: string;
  practice_Type: {
    id: string;
    name: string;
  };
  practice_name: string;
  practice_Role: {
    id: string;
    name: string;
  };
  practice_DSO: {
    id: string;
    name: string;
  };
  create_time: number;
  start_time: number;
  end_time: number;
  email: string;
}

export interface ProfileResidency {
  id: string;
  dental_School: {
    id: string;
    name: string;
  };
  create_time: number;
  start_time: number;
  end_time: number;
  email: string;
  user_id: string;
}
