export interface PricingProps {
  /**
   * Package boxes
   */
  children: React.ReactNode;
}

export interface Option {
  /**
   * Name of option
   */
  name: string;
  /**
   * Price of adding option
   */
  price: number;
  /**
   * One time fee or hourly
   */
  type: 'once' | 'hourly';
  /**
   * Default value
   */
  defaultValue: number;
  /**
   * Show price in Option box
   */
  showPrice: boolean;
}

export interface Package {
  /**
   * Name of Package. Example: Wedding
   */
  name: string;
  /**
   * Short description of Package
   */
  description: string;
  /**
   * The base cost of Package for calculation purpose
   */
  basePrice: number;
  /**
   * The base cost of Package for label
   */
  basePriceLabel: string;
  /**
   * The features that come with the base cost
   */
  features: string[];
  /**
   * Additional options for added cost
   */
  options?: Option[];
}

export interface PackageProps extends Package {
  /**
   * Index of this package
   */
  index?: number;
  /**
   * Create booking action
   */
  createBooking?: (index: number, selectedOptions: number[]) => void;
}
