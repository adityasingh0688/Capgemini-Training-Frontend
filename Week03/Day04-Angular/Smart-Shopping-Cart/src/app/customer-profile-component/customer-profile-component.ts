import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Customer } from './customer';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-customer-profile-component',
  imports: [FormsModule,CommonModule],
  templateUrl: './customer-profile-component.html',
  styleUrl: './customer-profile-component.css',
})
export class CustomerProfileComponent {
  customer: Customer = {
  id: 1,
  firstName: 'Aditya',
  lastName: 'Singh',
  email: 'useradityasingh8@gmail.com',
  phone: '9926911656',
  address: 'Greater Noida, India',
  membershipLevel: 'Premium',
  loyaltyPoints: 1250,
  totalOrders: 15,
  joinDate: new Date(),
  profileImageUrl: '',
  isActive: true,
  subscribeNewsletter: true,
  preferredCategory: 'Electronics'
};

isEditMode = false;
originalCustomer!: Customer;

toggleEditMode() {
  this.originalCustomer = structuredClone(this.customer);
  this.isEditMode = true;
}
saveProfile() {
  this.isEditMode = false;
}

cancelEdit() {
  this.customer = structuredClone(this.originalCustomer);
  this.isEditMode = false;
}

isFormValid(): boolean {
  return (
    this.customer.firstName.trim() !== '' &&
    this.customer.lastName.trim() !== '' &&
    this.customer.email.includes('@')
  );
}

getMembershipColor(): string {

  switch(this.customer.membershipLevel){

    case 'Premium':
      return 'gold';

    case 'Gold':
      return 'orange';

    case 'Silver':
      return 'silver';

    default:
      return 'brown';
  }
}

categories = [
  'Electronics',
  'Accessories',
  'Audio',
  'Computers'
];

defaultProfileImage ='https://via.placeholder.com/150';
onPhotoUpload(event:any){

  const file = event.target.files[0];

  if(file){

    const reader = new FileReader();

    reader.onload = () => {
      this.customer.profileImageUrl =
      reader.result as string;
    };

    reader.readAsDataURL(file);
  }
}

get isProfileComplete(): boolean {

  return (
    this.customer.firstName !== '' &&
    this.customer.lastName !== '' &&
    this.customer.email !== ''
  );
}
}
