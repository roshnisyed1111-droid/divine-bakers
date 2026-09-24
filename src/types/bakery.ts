export interface Product {
  id: string;
  name: string;
  category: 'cakes' | 'sweets' | 'pastries' | 'biscuits' | 'snacks' | 'gifts';
  shortDescription: string;
  fullDescription: string;
  image: string;
  badge?: string;
  serving?: string;
}

export interface Category {
  id: string;
  name: string;
  subtitle: string;
  image: string;
  itemCount: string;
}

export interface BranchLocation {
  id: string;
  name: string;
  area: string;
  address: string;
  googleMapsUrl: string;
  phone: string;
  hours: string;
}
