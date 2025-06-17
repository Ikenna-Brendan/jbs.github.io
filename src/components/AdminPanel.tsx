import React, { useState } from 'react';
import { 
  Settings, 
  Save, 
  Upload, 
  Image as ImageIcon, 
  FileText, 
  Users, 
  Phone, 
  MapPin,
  Briefcase,
  Award,
  Building,
  Mail,
  Calendar,
  Target,
  Eye,
  Heart,
  Globe
} from 'lucide-react';
import ImageUpload from './ImageUpload';
import LogoUpload from './LogoUpload';

interface Project {
  title: string;
  category: string;
  client: string;
  location: string;
  duration: string;
  status: string;
  completion: string;
  description: string;
  objectives: string[];
  outcomes: string[];
  featured: boolean;
}

interface TeamMember {
  name: string;
  position: string;
  qualifications: string[];
  experience: string;
  specializations: string[];
  email: string;
  phone: string;
}

interface ContactInfo {
  headOffice: {
    address: string;
    phone: string;
    email: string;
  };
  annexOffice: {
    address: string;
    phone: string;
    email: string;
  };
  generalEmail: string;
  generalPhone: string;
}

interface CompanyInfo {
  name: string;
  tagline: string;
  mission: string;
  vision: string;
  description: string;
  foundedYear: string;
  employees: string;
}

const AdminPanel = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('images');
  const [images, setImages] = useState<{[key: string]: File | null}>({});

  // Content state
  const [companyInfo, setCompanyInfo] = useState<CompanyInfo>({
    name: 'Johnbabs Environmental and Engineering Services Ltd',
    tagline: 'Environmental Excellence, Engineering Solutions',
    mission: 'To provide innovative, sustainable, and cost-effective environmental and engineering solutions that protect natural resources, ensure regulatory compliance, and support sustainable development across Nigeria and West Africa.',
    vision: 'To be the leading environmental and engineering consultancy firm in Nigeria, recognized for our technical excellence, innovative solutions, and unwavering commitment to environmental stewardship and sustainable development.',
    description: 'Leading environmental consultancy and engineering services provider in Nigeria, committed to sustainable development and environmental protection.',
    foundedYear: '2008',
    employees: '50+'
  });

  const [contactInfo, setContactInfo] = useState<ContactInfo>({
    headOffice: {
      address: '123 Environmental Way, Victoria Island, Lagos, Nigeria',
      phone: '+234 (0) 123 456 7890',
      email: 'lagos@johnbabs.com'
    },
    annexOffice: {
      address: '456 Federal Way, Central Business District, Abuja, Nigeria',
      phone: '+234 (0) 987 654 3210',
      email: 'abuja@johnbabs.com'
    },
    generalEmail: 'info@johnbabs.com',
    generalPhone: '+234 (0) 123 456 7890'
  });

  const [projects, setProjects] = useState<Project[]>([
    {
      title: 'Lagos Industrial Complex EIA',
      category: 'Environmental Assessment',
      client: 'Lagos State Government',
      location: 'Lagos, Nigeria',
      duration: '18 months',
      status: 'Completed',
      completion: '2023',
      description: 'Comprehensive Environmental Impact Assessment for a major industrial complex development project.',
      objectives: [
        'Assess environmental impacts of proposed industrial development',
        'Develop mitigation measures for identified impacts',
        'Ensure compliance with Nigerian environmental regulations',
        'Engage with local communities and stakeholders'
      ],
      outcomes: [
        'Successfully obtained environmental approval',
        'Reduced environmental impact by 40%',
        'Implemented community benefit programs',
        'Established ongoing monitoring system'
      ],
      featured: true
    }
  ]);

  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([
    {
      name: 'Dr. John Babatunde',
      position: 'Chief Executive Officer',
      qualifications: [
        'Ph.D. Environmental Engineering',
        'M.Sc. Civil Engineering',
        'B.Eng. Civil Engineering',
        'COREN Registered Engineer'
      ],
      experience: '20+ years in environmental consulting and engineering design',
      specializations: ['Environmental Impact Assessment', 'Water Resources Management', 'Project Management'],
      email: 'ceo@johnbabs.com',
      phone: '+234 (0) 123 456 7890'
    }
  ]);

  const imageSlots = [
    { key: 'hero', label: 'Hero Banner Image', description: 'Main banner image on homepage' },
    { key: 'about', label: 'About Us Image', description: 'Company headquarters image' },
    { key: 'services1', label: 'Environmental Consultancy', description: 'Service page image' },
    { key: 'services2', label: 'Engineering Design', description: 'Service page image' },
    { key: 'services3', label: 'Waste Management', description: 'Service page image' },
    { key: 'project1', label: 'Featured Project 1', description: 'Project showcase image' },
    { key: 'project2', label: 'Featured Project 2', description: 'Project showcase image' },
    { key: 'project3', label: 'Featured Project 3', description: 'Project showcase image' },
    { key: 'team1', label: 'CEO Photo', description: 'Management team photo' },
    { key: 'team2', label: 'Director Photo', description: 'Management team photo' },
    { key: 'office1', label: 'Lagos Office', description: 'Office location image' },
    { key: 'office2', label: 'Abuja Office', description: 'Office location image' },
  ];

  const tabs = [
    { id: 'images', label: 'Images & Logo', icon: ImageIcon },
    { id: 'company', label: 'Company Info', icon: Building },
    { id: 'contact', label: 'Contact Info', icon: Phone },
    { id: 'projects', label: 'Projects', icon: Briefcase },
    { id: 'team', label: 'Team Members', icon: Users },
  ];

  const handleImageSelect = (key: string, file: File) => {
    setImages(prev => ({ ...prev, [key]: file }));
  };

  const handleLogoChange = (file: File) => {
    setImages(prev => ({ ...prev, logo: file }));
  };

  const addProject = () => {
    const newProject: Project = {
      title: '',
      category: 'Environmental Assessment',
      client: '',
      location: '',
      duration: '',
      status: 'Ongoing',
      completion: '',
      description: '',
      objectives: [''],
      outcomes: [''],
      featured: false
    };
    setProjects([...projects, newProject]);
  };

  const updateProject = (index: number, field: keyof Project, value: any) => {
    const updatedProjects = [...projects];
    updatedProjects[index] = { ...updatedProjects[index], [field]: value };
    setProjects(updatedProjects);
  };

  const removeProject = (index: number) => {
    setProjects(projects.filter((_, i) => i !== index));
  };

  const addTeamMember = () => {
    const newMember: TeamMember = {
      name: '',
      position: '',
      qualifications: [''],
      experience: '',
      specializations: [''],
      email: '',
      phone: ''
    };
    setTeamMembers([...teamMembers, newMember]);
  };

  const updateTeamMember = (index: number, field: keyof TeamMember, value: any) => {
    const updatedMembers = [...teamMembers];
    updatedMembers[index] = { ...updatedMembers[index], [field]: value };
    setTeamMembers(updatedMembers);
  };

  const removeTeamMember = (index: number) => {
    setTeamMembers(teamMembers.filter((_, i) => i !== index));
  };

  const handleSave = () => {
    const allData = {
      images,
      companyInfo,
      contactInfo,
      projects,
      teamMembers
    };
    
    // Save to localStorage for demo purposes
    localStorage.setItem('johnbabs_content', JSON.stringify(allData));
    
    console.log('Saving all content:', allData);
    alert('All content saved successfully! Note: In a production environment, this would be saved to your server.');
  };

  const renderImagesTab = () => (
    <div className="space-y-6">
      {/* Logo Upload Section */}
      <div className="p-4 bg-emerald-50 rounded-lg">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Company Logo</h3>
        <LogoUpload onLogoChange={handleLogoChange} showUpload={true} />
      </div>

      {/* Image Upload Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {imageSlots.map((slot) => (
          <div key={slot.key} className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-2">{slot.label}</h4>
            <p className="text-sm text-gray-600 mb-3">{slot.description}</p>
            <ImageUpload
              onImageSelect={(file) => handleImageSelect(slot.key, file)}
              placeholder="Upload image"
              className="h-32"
            />
          </div>
        ))}
      </div>
    </div>
  );

  const renderCompanyTab = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
          <input
            type="text"
            value={companyInfo.name}
            onChange={(e) => setCompanyInfo({...companyInfo, name: e.target.value})}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Tagline</label>
          <input
            type="text"
            value={companyInfo.tagline}
            onChange={(e) => setCompanyInfo({...companyInfo, tagline: e.target.value})}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Founded Year</label>
          <input
            type="text"
            value={companyInfo.foundedYear}
            onChange={(e) => setCompanyInfo({...companyInfo, foundedYear: e.target.value})}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Number of Employees</label>
          <input
            type="text"
            value={companyInfo.employees}
            onChange={(e) => setCompanyInfo({...companyInfo, employees: e.target.value})}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
          />
        </div>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Company Description</label>
        <textarea
          value={companyInfo.description}
          onChange={(e) => setCompanyInfo({...companyInfo, description: e.target.value})}
          rows={3}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Mission Statement</label>
        <textarea
          value={companyInfo.mission}
          onChange={(e) => setCompanyInfo({...companyInfo, mission: e.target.value})}
          rows={4}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Vision Statement</label>
        <textarea
          value={companyInfo.vision}
          onChange={(e) => setCompanyInfo({...companyInfo, vision: e.target.value})}
          rows={4}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
        />
      </div>
    </div>
  );

  const renderContactTab = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">General Email</label>
          <input
            type="email"
            value={contactInfo.generalEmail}
            onChange={(e) => setContactInfo({...contactInfo, generalEmail: e.target.value})}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">General Phone</label>
          <input
            type="tel"
            value={contactInfo.generalPhone}
            onChange={(e) => setContactInfo({...contactInfo, generalPhone: e.target.value})}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Head Office */}
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Head Office (Lagos)</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
              <textarea
                value={contactInfo.headOffice.address}
                onChange={(e) => setContactInfo({
                  ...contactInfo,
                  headOffice: {...contactInfo.headOffice, address: e.target.value}
                })}
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
              <input
                type="tel"
                value={contactInfo.headOffice.phone}
                onChange={(e) => setContactInfo({
                  ...contactInfo,
                  headOffice: {...contactInfo.headOffice, phone: e.target.value}
                })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input
                type="email"
                value={contactInfo.headOffice.email}
                onChange={(e) => setContactInfo({
                  ...contactInfo,
                  headOffice: {...contactInfo.headOffice, email: e.target.value}
                })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              />
            </div>
          </div>
        </div>

        {/* Annex Office */}
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Annex Office (Abuja)</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
              <textarea
                value={contactInfo.annexOffice.address}
                onChange={(e) => setContactInfo({
                  ...contactInfo,
                  annexOffice: {...contactInfo.annexOffice, address: e.target.value}
                })}
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
              <input
                type="tel"
                value={contactInfo.annexOffice.phone}
                onChange={(e) => setContactInfo({
                  ...contactInfo,
                  annexOffice: {...contactInfo.annexOffice, phone: e.target.value}
                })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input
                type="email"
                value={contactInfo.annexOffice.email}
                onChange={(e) => setContactInfo({
                  ...contactInfo,
                  annexOffice: {...contactInfo.annexOffice, email: e.target.value}
                })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderProjectsTab = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-gray-900">Manage Projects</h3>
        <button
          onClick={addProject}
          className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
        >
          Add New Project
        </button>
      </div>

      {projects.map((project, index) => (
        <div key={index} className="bg-gray-50 p-6 rounded-lg">
          <div className="flex justify-between items-start mb-4">
            <h4 className="text-lg font-semibold text-gray-900">Project {index + 1}</h4>
            <button
              onClick={() => removeProject(index)}
              className="text-red-600 hover:text-red-800"
            >
              Remove
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Project Title</label>
              <input
                type="text"
                value={project.title}
                onChange={(e) => updateProject(index, 'title', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
              <select
                value={project.category}
                onChange={(e) => updateProject(index, 'category', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              >
                <option value="Environmental Assessment">Environmental Assessment</option>
                <option value="Engineering Design">Engineering Design</option>
                <option value="Waste Management">Waste Management</option>
                <option value="Restoration">Restoration</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Client</label>
              <input
                type="text"
                value={project.client}
                onChange={(e) => updateProject(index, 'client', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
              <input
                type="text"
                value={project.location}
                onChange={(e) => updateProject(index, 'location', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Duration</label>
              <input
                type="text"
                value={project.duration}
                onChange={(e) => updateProject(index, 'duration', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
              <select
                value={project.status}
                onChange={(e) => updateProject(index, 'status', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              >
                <option value="Ongoing">Ongoing</option>
                <option value="Completed">Completed</option>
                <option value="Planning">Planning</option>
              </select>
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
            <textarea
              value={project.description}
              onChange={(e) => updateProject(index, 'description', e.target.value)}
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            />
          </div>

          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              checked={project.featured}
              onChange={(e) => updateProject(index, 'featured', e.target.checked)}
              className="mr-2"
            />
            <label className="text-sm font-medium text-gray-700">Featured Project</label>
          </div>
        </div>
      ))}
    </div>
  );

  const renderTeamTab = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-gray-900">Manage Team Members</h3>
        <button
          onClick={addTeamMember}
          className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
        >
          Add Team Member
        </button>
      </div>

      {teamMembers.map((member, index) => (
        <div key={index} className="bg-gray-50 p-6 rounded-lg">
          <div className="flex justify-between items-start mb-4">
            <h4 className="text-lg font-semibold text-gray-900">Team Member {index + 1}</h4>
            <button
              onClick={() => removeTeamMember(index)}
              className="text-red-600 hover:text-red-800"
            >
              Remove
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
              <input
                type="text"
                value={member.name}
                onChange={(e) => updateTeamMember(index, 'name', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Position</label>
              <input
                type="text"
                value={member.position}
                onChange={(e) => updateTeamMember(index, 'position', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input
                type="email"
                value={member.email}
                onChange={(e) => updateTeamMember(index, 'email', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
              <input
                type="tel"
                value={member.phone}
                onChange={(e) => updateTeamMember(index, 'phone', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">Experience</label>
            <textarea
              value={member.experience}
              onChange={(e) => updateTeamMember(index, 'experience', e.target.value)}
              rows={2}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">Qualifications (one per line)</label>
            <textarea
              value={member.qualifications.join('\n')}
              onChange={(e) => updateTeamMember(index, 'qualifications', e.target.value.split('\n').filter(q => q.trim()))}
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Specializations (one per line)</label>
            <textarea
              value={member.specializations.join('\n')}
              onChange={(e) => updateTeamMember(index, 'specializations', e.target.value.split('\n').filter(s => s.trim()))}
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            />
          </div>
        </div>
      ))}
    </div>
  );

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 bg-emerald-600 text-white p-3 rounded-full shadow-lg hover:bg-emerald-700 transition-colors z-50"
        title="Admin Panel"
      >
        <Settings className="h-6 w-6" />
      </button>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl max-w-6xl w-full max-h-[90vh] overflow-hidden flex">
        {/* Sidebar */}
        <div className="w-64 bg-gray-50 border-r border-gray-200 p-4">
          <div className="flex items-center mb-6">
            <Settings className="h-6 w-6 mr-2 text-emerald-600" />
            <h2 className="text-lg font-bold text-gray-900">Admin Panel</h2>
          </div>
          <nav className="space-y-2">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center px-3 py-2 text-left rounded-lg transition-colors ${
                    activeTab === tab.id
                      ? 'bg-emerald-100 text-emerald-700'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <Icon className="h-5 w-5 mr-3" />
                  {tab.label}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          <div className="p-6 border-b border-gray-200 flex justify-between items-center">
            <h3 className="text-xl font-bold text-gray-900">
              {tabs.find(tab => tab.id === activeTab)?.label}
            </h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-6">
            {activeTab === 'images' && renderImagesTab()}
            {activeTab === 'company' && renderCompanyTab()}
            {activeTab === 'contact' && renderContactTab()}
            {activeTab === 'projects' && renderProjectsTab()}
            {activeTab === 'team' && renderTeamTab()}
          </div>

          {/* Save Button */}
          <div className="p-6 border-t border-gray-200 flex justify-end space-x-4">
            <button
              onClick={() => setIsOpen(false)}
              className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="px-6 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors flex items-center"
            >
              <Save className="h-4 w-4 mr-2" />
              Save All Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;