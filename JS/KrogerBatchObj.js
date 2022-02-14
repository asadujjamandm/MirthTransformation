// Address //

var Address = {};

Address.Street1 = msg['body']['SelectableData']['businessData']['RxFillRS']['rx']['RxRS']['patient']['PatientRS']['address']['AddressRS']['street1'].toString().trim();
Address.Street2 = null;
Address.City = msg['body']['SelectableData']['businessData']['RxFillRS']['rx']['RxRS']['patient']['PatientRS']['address']['AddressRS']['city'].toString().trim();
Address.State = msg['body']['SelectableData']['businessData']['RxFillRS']['rx']['RxRS']['patient']['PatientRS']['address']['AddressRS']['stateCode'].toString().trim();	
Address.ZIP = msg['body']['SelectableData']['businessData']['RxFillRS']['rx']['RxRS']['patient']['PatientRS']['address']['AddressRS']['postalCode'].toString().trim();
Address.Country = msg['body']['SelectableData']['businessData']['RxFillRS']['rx']['RxRS']['patient']['PatientRS']['address']['AddressRS']['county'].toString().trim();
Address.AddressType = "Primary";
Address.Primary = "true";

var Addresses = [];

if((!IsNullOrEmpty(Address.Street1) || !IsNullOrEmpty(Address.Street2)) && 
	(!IsNullOrEmpty(Address.City) || !IsNullOrEmpty(Address.State)))
{
	Addresses.push(Address);
}

channelMap.put('Addresses', Addresses);


// PhoneNumber //

var PhoneNumberH = {};

PhoneNumberH.Number = msg['body']['SelectableData']['businessData']['RxFillRS']['rx']['RxRS']['patient']['PatientRS']['address']['AddressRS']['phoneNumber']['TelephoneRS']['areaCode'].toString().trim() + msg['body']['SelectableData']['businessData']['RxFillRS']['rx']['RxRS']['patient']['PatientRS']['address']['AddressRS']['phoneNumber']['TelephoneRS']['number'].toString().trim();
PhoneNumberH.Type = msg['body']['SelectableData']['businessData']['RxFillRS']['rx']['RxRS']['patient']['PatientRS']['address']['AddressRS']['phoneNumber']['TelephoneRS']['type'].toString().trim();

var PhoneNumbers = [];

if(!IsNullOrEmpty(PhoneNumberH.Number)){
	PhoneNumbers.push(PhoneNumberH);
}

channelMap.put('PhoneNumbers', PhoneNumbers);

// Patient //

var Patient = {};

Patient.Id = msg['body']['SelectableData']['businessData']['RxFillRS']['rx']['RxRS']['patient']['PatientRS']['patientNumber'].toString();
Patient.FirstName = msg['body']['SelectableData']['businessData']['RxFillRS']['rx']['RxRS']['patient']['PatientRS']['firstName'].toString().trim();
Patient.LastName = msg['body']['SelectableData']['businessData']['RxFillRS']['rx']['RxRS']['patient']['PatientRS']['lastName'].toString().trim();
Patient.DOB = FormateDate(msg['body']['SelectableData']['businessData']['RxFillRS']['rx']['RxRS']['patient']['PatientRS']['birthDate']['Date']['year'].toString().trim() +msg['body']['SelectableData']['businessData']['RxFillRS']['rx']['RxRS']['patient']['PatientRS']['birthDate']['Date']['month'].toString().trim() + msg['body']['SelectableData']['businessData']['RxFillRS']['rx']['RxRS']['patient']['PatientRS']['birthDate']['Date']['day'].toString().trim());
Patient.IdType = null;
Patient.Initials = null; //// FOL
Patient.MiddleName = msg['body']['SelectableData']['businessData']['RxFillRS']['rx']['RxRS']['patient']['PatientRS']['middleName'].toString().trim();
Patient.Sex = msg['body']['SelectableData']['businessData']['RxFillRS']['rx']['RxRS']['patient']['PatientRS']['gender'].toString() === "F" ? "Female" : "Male";

Patient.Addresses = Addresses;
Patient.PhoneNumbers = PhoneNumbers;
channelMap.put('Patient', Patient);

// LabelItems //

var LabelItems = [];

var RxNumber = {}
RxNumber.Name = "RxNumber";
RxNumber.Text = msg['body']['SelectableData']['businessData']['RxFillRS']['rx']['RxRS']['rxNumber'].toString().trim();
LabelItems.push(RxNumber);

var RefillNumber = {}
RefillNumber.Name = "RefillNumber";
RefillNumber.Text = msg['body']['SelectableData']['businessData']['RxFillRS']['refillNumber'].toString().trim();
LabelItems.push(RefillNumber);

var PatientTitle = {}
PatientTitle.Name = "PatientTitle";
PatientTitle.Text ="" ;
LabelItems.push(PatientTitle);

var PatientFirstName = {}
PatientFirstName.Name = "PatientFirstName";
PatientFirstName.Text = msg['body']['SelectableData']['businessData']['RxFillRS']['rx']['RxRS']['patient']['PatientRS']['firstName'].toString().trim();
LabelItems.push(PatientFirstName);

var PatientMiddleName = {}
PatientMiddleName.Name = "PatientMiddleName";
PatientMiddleName.Text = msg['body']['SelectableData']['businessData']['RxFillRS']['rx']['RxRS']['patient']['PatientRS']['middleName'].toString().trim();
LabelItems.push(PatientMiddleName);

var PatientLastName = {}
PatientLastName.Name = "PatientLastName";
PatientLastName.Text = msg['body']['SelectableData']['businessData']['RxFillRS']['rx']['RxRS']['patient']['PatientRS']['lastName'].toString().trim();
LabelItems.push(PatientLastName);

var DrugNDC = {}
DrugNDC.Name = "DrugNDC";
DrugNDC.Text = msg['body']['SelectableData']['businessData']['RxFillRS']['rx']['RxRS']['product']['ProductRS']['nDCMfgCode'].toString()+msg['body']['SelectableData']['businessData']['RxFillRS']['rx']['RxRS']['product']['ProductRS']['nDCProductCode'].toString()+msg['body']['SelectableData']['businessData']['RxFillRS']['rx']['RxRS']['product']['ProductRS']['nDCSize'].toString().trim();
LabelItems.push(DrugNDC);

var DispensedDrugName = {}
DispensedDrugName.Name = "DispensedDrugName";
DispensedDrugName.Text =msg['body']['SelectableData']['businessData']['RxFillRS']['dispensedProduct']['ProductRS']['labelName'].toString().trim();
LabelItems.push(DispensedDrugName);

var AltDispensedDrugName = {}
AltDispensedDrugName.Name = "AltDispensedDrugName";
AltDispensedDrugName.Text = msg['body']['SelectableData']['businessData']['RxFillRS']['dispensedProduct']['ProductRS']['labelName25'].toString().trim();
LabelItems.push(AltDispensedDrugName);

var InventorySelector = {}
InventorySelector.Name = "InventorySelector";
InventorySelector.Text ="" ;
LabelItems.push(InventorySelector);

var DispenseQuantity = {}
DispenseQuantity.Name = "DispenseQuantity";
DispenseQuantity.Text = msg['body']['SelectableData']['businessData']['RxFillRS']['dispensedQty'].toString().trim();
LabelItems.push(DispenseQuantity);

var Urgency = {}
Urgency.Name = "Urgency";//FOL
Urgency.Text ="" ;
LabelItems.push(Urgency);

var Price = {}
Price.Name = "Price";
Price.Text = msg['body']['SelectableData']['businessData']['RxFillRS']['price'].toString().trim();//not sure need to check(not found in xml)
LabelItems.push(Price);

var Liquid = {}
Liquid.Name = "Liquid";
Liquid.Text ="" ; 
LabelItems.push(Liquid);

var Refrigerated = {}
Refrigerated.Name = "Refrigerated";//FOL
Refrigerated.Text ="" ;
LabelItems.push(Refrigerated);

var RefillsLeft = {}
RefillsLeft.Name = "RefillsLeft";
RefillsLeft.Text = msg['body']['SelectableData']['businessData']['RxFillRS']['rx']['RxRS']['refillsRemaining'].toString().trim();
LabelItems.push(RefillsLeft);

var TotalRefills = {}
TotalRefills.Name = "TotalRefills";
TotalRefills.Text = msg['body']['SelectableData']['businessData']['RxFillRS']['rx']['RxRS']['refillsAuthorized'].toString().trim();
LabelItems.push(TotalRefills);

var RxOrigDate = {}
RxOrigDate.Name = "RxOrigDate";
RxOrigDate.Text = msg['body']['SelectableData']['businessData']['RxFillRS']['dispensedProduct']['ProductRS']['dEAClass'].toString().trim();
LabelItems.push(RxOrigDate);

var RefillDate = {}
RefillDate.Name = "RefillDate";
RefillDate.Text ="" ;
LabelItems.push(RefillDate);

var DAW = {}
DAW.Name = "DAW";
DAW.Text ="" ;
LabelItems.push(DAW);

var FillDate = {}
FillDate.Name = "FillDate";
FillDate.Text = msg['body']['SelectableData']['businessData']['RxFillRS']['dateOfService']['Date']['year'].toString()+msg['body']['SelectableData']['businessData']['RxFillRS']['dateOfService']['Date']['month'].toString()+msg['body']['SelectableData']['businessData']['RxFillRS']['dateOfService']['Date']['day'].toString()+msg['body']['SelectableData']['businessData']['RxFillRS']['dateOfService']['Date']['hour'].toString()+msg['body']['SelectableData']['businessData']['RxFillRS']['dateOfService']['Date']['minute'].toString()+msg['body']['SelectableData']['businessData']['RxFillRS']['dateOfService']['Date']['second'].toString().trim();
LabelItems.push(FillDate);




var RxExpirationDate = {}
RxExpirationDate.Name = "RxExpirationDate";
RxExpirationDate.Text = msg['body']['SelectableData']['businessData']['RxFillRS']['rx']['RxRS']['rxExpiryDate']['Date']['year'].toString()+msg['body']['SelectableData']['businessData']['RxFillRS']['rx']['RxRS']['rxExpiryDate']['Date']['month'].toString()+msg['body']['SelectableData']['businessData']['RxFillRS']['rx']['RxRS']['rxExpiryDate']['Date']['day'].toString()+msg['body']['SelectableData']['businessData']['RxFillRS']['rx']['RxRS']['rxExpiryDate']['Date']['hour'].toString()+msg['body']['SelectableData']['businessData']['RxFillRS']['rx']['RxRS']['rxExpiryDate']['Date']['minute'].toString()+msg['body']['SelectableData']['businessData']['RxFillRS']['rx']['RxRS']['rxExpiryDate']['Date']['second'].toString().trim();
LabelItems.push(RxExpirationDate);



var DiscardDate = {}
DiscardDate.Name = "DiscardDate";
DiscardDate.Text = "" ;
LabelItems.push(DiscardDate);

var PreviousFillDate = {}
PreviousFillDate.Name = "PreviousFillDate";
PreviousFillDate.Text = "" ;
LabelItems.push(PreviousFillDate);

var PrescribedDrugName = {}
PrescribedDrugName.Name = "PrescribedDrugName";
PrescribedDrugName.Text = msg['body']['SelectableData']['businessData']['RxFillRS']['dispensedProduct']['ProductRS']['labelName'].toString().trim();
LabelItems.push(PrescribedDrugName);

var PrescribedDrugChemicalName = {}
PrescribedDrugChemicalName.Name = "PrescribedDrugChemicalName";
PrescribedDrugChemicalName.Text ="" ;
LabelItems.push(PrescribedDrugChemicalName);

var DrugSchedule = {}
DrugSchedule.Name = "DrugSchedule";
DrugSchedule.Text = msg['body']['SelectableData']['businessData']['RxFillRS']['dispensedProduct']['ProductRS']['dEAClass'].toString().trim(); // DrugClass (not sure)
LabelItems.push(DrugSchedule);

var CompoundCode = {}
CompoundCode.Name = "CompoundCode";
CompoundCode.Text ="" ;
LabelItems.push(CompoundCode);

var DrugMfg = {}
DrugMfg.Name = "DrugMfg";
DrugMfg.Text = msg['body']['SelectableData']['businessData']['RxFillRS']['rx']['RxRS']['product']['ProductRS']['manufacturer'].toString().trim();
LabelItems.push(DrugMfg);

var DrugImprint = {}
DrugImprint.Name = "DrugImprint";
DrugImprint.Text ="" ;
LabelItems.push(DrugImprint);

var DrugForm = {}
DrugForm.Name = "DrugForm";
DrugForm.Text = msg['body']['SelectableData']['businessData']['RxFillRS']['dispensedProduct']['ProductRS']['dosageFormDescription'].toString().trim();
LabelItems.push(DrugForm);

var DrugStrength = {}
DrugStrength.Name = "DrugStrength";
DrugStrength.Text = msg['body']['SelectableData']['businessData']['RxFillRS']['dispensedProduct']['ProductRS']['strength'].toString().trim();
LabelItems.push(DrugStrength);



var DaysSupply = {}
DaysSupply.Name = "DaysSupply";
DaysSupply.Text = msg['body']['SelectableData']['businessData']['RxFillRS']['daysSupply'].toString().trim();
LabelItems.push(DaysSupply);

var Warning1 = {}
Warning1.Name = "Warning1";
Warning1.Text = msg['body']['SelectableData']['businessData']['RxFillRS']['warningLabelText']['WarningLabelText'][0]['priority'].toString().trim();
LabelItems.push(Warning1);


var Warning2 = {}
Warning2.Name = "Warning2";
Warning2.Text = msg['body']['SelectableData']['businessData']['RxFillRS']['warningLabelText']['WarningLabelText'][1]['priority'].toString().trim();
LabelItems.push(Warning2);


var Warning3 = {}
Warning3.Name = "Warning3";
Warning3.Text = msg['body']['SelectableData']['businessData']['RxFillRS']['warningLabelText']['WarningLabelText'][2]['priority'].toString().trim();
LabelItems.push(Warning3);

var Warning4 = {}
Warning4.Name = "Warning4";
Warning4.Text = msg['body']['SelectableData']['businessData']['RxFillRS']['warningLabelText']['WarningLabelText'][3]['priority'].toString().trim();
LabelItems.push(Warning4);


var Warning5 = {}
Warning5.Name = "Warning5";
Warning5.Text = msg['body']['SelectableData']['businessData']['RxFillRS']['warningLabelText']['WarningLabelText'][4]['priority'].toString().trim();
LabelItems.push(Warning5);

var WarningBitmap1 = {}
WarningBitmap1.Name = "WarningBitmap1";//An image for the Warning
WarningBitmap1.Text = null;
LabelItems.push(WarningBitmap1);

var WarningBitmap2 = {}
WarningBitmap2.Name = "WarningBitmap2";//An image for the Warning
WarningBitmap2.Text = null;
LabelItems.push(WarningBitmap2);


var WarningBitmap3 = {}
WarningBitmap3.Name = "WarningBitmap3";//An image for the Warning
WarningBitmap3.Text = null;
LabelItems.push(WarningBitmap3);

var WarningBitmap4 = {}
WarningBitmap4.Name = "WarningBitmap4";//An image for the Warning
WarningBitmap4.Text = null;
LabelItems.push(WarningBitmap4);

var WarningBitmap5 = {}
WarningBitmap5.Name = "WarningBitmap5";//An image for the Warning
WarningBitmap5.Text = "";
LabelItems.push(WarningBitmap5);


var Sig = {}
Sig.Name = "Sig";
Sig.Text = msg['body']['SelectableData']['businessData']['RxFillRS']['patientSig'].toString().trim();
LabelItems.push(Sig);


var UnicodeSig = {}
UnicodeSig.Name = "UnicodeSig";
UnicodeSig.Text = "";
LabelItems.push(UnicodeSig);

var SafetyCap = {}
SafetyCap.Name = "SafetyCap";
SafetyCap.Text = msg['body']['SelectableData']['businessData']['RxFillRS']['rx']['RxRS']['patient']['PatientRS']['safetyCaps'].toString().trim();
LabelItems.push(SafetyCap);


var StoreAddress1 = {}
StoreAddress1.Name = "StoreAddress1";
StoreAddress1.Text = msg['body']['SelectableData']['pharmacy']['PharmacyRS']['address']['AddressRS']['street1'].toString().trim();
LabelItems.push(StoreAddress1);

var StoreAddress2 = {}
StoreAddress2.Name = "StoreAddress2";
StoreAddress2.Text = "";
LabelItems.push(StoreAddress2);

var StoreCity = {};
StoreCity.Name = "StoreCity";
StoreCity.Text = msg['body']['SelectableData']['pharmacy']['PharmacyRS']['address']['AddressRS']['city'].toString().trim();
LabelItems.push(StoreCity);


var StoreDEA = {};
StoreDEA.Name = "StoreDEA";
StoreDEA.Text = "";
LabelItems.push(StoreDEA);


var StoreName = {}
StoreName.Name = "StoreName";
StoreName.Text = "";
LabelItems.push(StoreName);


var StoreNumber = {}
StoreNumber.Name = "StoreNumber";
StoreNumber.Text = "";
LabelItems.push(StoreNumber);

var StorePhoneNumber = {}
StorePhoneNumber.Name = "StorePhoneNumber";
StorePhoneNumber.Text = "";
LabelItems.push(StorePhoneNumber);


var StoreState = {}
StoreState.Name = "StoreState";
StoreState.Text = msg['body']['SelectableData']['pharmacy']['PharmacyRS']['address']['AddressRS']['stateCode'].toString().trim();
LabelItems.push(StoreState);

var StoreZip = {};
StoreZip.Name = "StoreZip"
StoreZip.Text = msg['body']['SelectableData']['pharmacy']['PharmacyRS']['address']['AddressRS']['postalCode'].toString().trim();
LabelItems.push(StoreZip);


var TotalPillsPrescribed = {}
TotalPillsPrescribed.Name = "TotalPillsPrescribed";
TotalPillsPrescribed.Text = msg['body']['SelectableData']['businessData']['RxFillRS']['dispensedQty'].toString().trim();
LabelItems.push(TotalPillsPrescribed);

var TotalPillsRemaining = {}
TotalPillsRemaining.Name = "TotalPillsRemaining";
TotalPillsRemaining.Text = "";
LabelItems.push(TotalPillsRemaining);

var PharmacistTitle = {}
PharmacistTitle.Name = "PharmacistTitle";
PharmacistTitle.Text = "";
LabelItems.push(PharmacistTitle);

var PharmacistFirstName = {}
PharmacistFirstName.Name = "PharmacistFirstName";
PharmacistFirstName.Text = "";
LabelItems.push(PharmacistFirstName);

var PharmacistMiddleName = {};
PharmacistMiddleName.Name = "PharmacistMiddleName ";
PharmacistMiddleName.Text = "";
LabelItems.push(PharmacistMiddleName);

var PharmacistLastName = {}
PharmacistLastName.Name = "PharmacistLastName";
PharmacistLastName.Text = "";
LabelItems.push(PharmacistLastName);

var RPhLicenseNumber = {}
RPhLicenseNumber.Name = "RPhLicenseNumber";
RPhLicenseNumber.Text = "";
LabelItems.push(RPhLicenseNumber);

var RPhInitials = {}
RPhInitials.Name = "RPhInitials";
RPhInitials.Text = msg['body']['SelectableData']['pharmacy']['PharmacyRS']['pICInitials'].toString().trim();
LabelItems.push(RPhInitials);

var RxOrigin = {}
RxOrigin.Name = "RxOrigin";
RxOrigin.Text = "";
LabelItems.push(RxOrigin);

var TechInitials = {}
TechInitials.Name = "TechInitials";
TechInitials.Text = msg['body']['SelectableData']['businessData']['RxFillRS']['verificationPharmacistInitials'].toString().trim();
LabelItems.push(TechInitials);

var EntryInitials = {}
EntryInitials.Name = "EntryInitials";
EntryInitials.Text = "";
LabelItems.push(EntryInitials);

var EntryDate = {}
EntryDate.Name = "EntryDate";
EntryDate.Text = "";
LabelItems.push(EntryDate);

var SourceTerminal = {}
SourceTerminal.Name = "SourceTerminal";
SourceTerminal.Text = "";
LabelItems.push(SourceTerminal);

var PatientAddress1 = {}
PatientAddress1.Name = "PatientAddress1";
PatientAddress1.Text = msg['body']['SelectableData']['businessData']['RxFillRS']['rx']['RxRS']['patient']['PatientRS']['address']['AddressRS']['street1'].toString().trim();
LabelItems.push(PatientAddress1);

var PatientAddress2 = {}
PatientAddress2.Name = "PatientAddress2";
PatientAddress2.Text = "";
LabelItems.push(PatientAddress2);

var PatientCity = {}
PatientCity.Name = "PatientCity";
PatientCity.Text = msg['body']['SelectableData']['businessData']['RxFillRS']['rx']['RxRS']['patient']['PatientRS']['address']['AddressRS']['city'].toString().trim();
LabelItems.push(PatientCity);

var PatientState = {}
PatientState.Name = "PatientState";
PatientState.Text = msg['body']['SelectableData']['businessData']['RxFillRS']['rx']['RxRS']['patient']['PatientRS']['address']['AddressRS']['stateCode'].toString().trim();
LabelItems.push(PatientState);

var PatientZip = {}
PatientZip.Name = "PatientZip";
PatientZip.Text = msg['body']['SelectableData']['businessData']['RxFillRS']['rx']['RxRS']['patient']['PatientRS']['address']['AddressRS']['postalCode'].toString();
LabelItems.push(PatientZip);

var PatientSSN = {}
PatientSSN.Name = "PatientSSN";
PatientSSN.Text = "";
LabelItems.push(PatientSSN);

var PatientID = {}
PatientID.Name = "PatientID";
PatientID.Text = msg['body']['SelectableData']['businessData']['RxFillRS']['rx']['RxRS']['patient']['PatientRS']['patientNumber'].toString().trim();
LabelItems.push(PatientID);

var FamilyID = {}
FamilyID.Name = "FamilyID";
FamilyID.Text = "";
LabelItems.push(FamilyID);

var PatientDOB = {}
PatientDOB.Name = "PatientDOB";
PatientDOB.Text = "";
LabelItems.push(PatientDOB);

var PatientPhoneNumber = {}
PatientPhoneNumber.Name = "PatientPhoneNumber";
PatientPhoneNumber.Text = msg['body']['SelectableData']['businessData']['RxFillRS']['rx']['RxRS']['patient']['PatientRS']['address']['AddressRS']['phoneNumber']['TelephoneRS']['areaCode'].toString() + msg['body']['SelectableData']['businessData']['RxFillRS']['rx']['RxRS']['patient']['PatientRS']['address']['AddressRS']['phoneNumber']['TelephoneRS']['number'].toString();
LabelItems.push(PatientPhoneNumber);

var PrescriberTitle = {}
PrescriberTitle.Name = "PrescriberTitle";
PrescriberTitle.Text = "";
LabelItems.push(PrescriberTitle);

var PrescriberFirstName = {}
PrescriberFirstName.Name = "PrescriberFirstName";
PrescriberFirstName.Text = msg['body']['SelectableData']['businessData']['RxFillRS']['rx']['RxRS']['prescriber']['PrescriberRS']['firstName'].toString().trim();
LabelItems.push(PrescriberFirstName);

var PrescriberMiddleName = {}
PrescriberMiddleName.Name = "PrescriberMiddleName";
PrescriberMiddleName.Text = msg['body']['SelectableData']['businessData']['RxFillRS']['rx']['RxRS']['prescriber']['PrescriberRS']['middleName'].toString().trim();
LabelItems.push(PrescriberMiddleName);

var PrescriberLastName = {}
PrescriberLastName.Name = "PrescriberLastName";
PrescriberLastName.Text = msg['body']['SelectableData']['businessData']['RxFillRS']['rx']['RxRS']['prescriber']['PrescriberRS']['lastName'].toString().trim();
LabelItems.push(PrescriberLastName);

var PrescriberDEA = {}
PrescriberDEA.Name = "PrescriberDEA";
PrescriberDEA.Text = msg['body']['SelectableData']['businessData']['RxFillRS']['rx']['RxRS']['prescriber']['PrescriberRS']['dEANumber'].toString().trim();
LabelItems.push(PrescriberDEA);

var PrescriberNPI = {}
PrescriberNPI.Name = "PrescriberNPI";
PrescriberNPI.Text = "";
LabelItems.push(PrescriberNPI);

var PrescriberAddress1 = {}
PrescriberAddress1.Name = "PrescriberAddress1";
PrescriberAddress1.Text = msg['body']['SelectableData']['businessData']['RxFillRS']['rx']['RxRS']['prescriber']['PrescriberRS']['address']['AddressRS']['street1'].toString().trim();
LabelItems.push(PrescriberAddress1);

var PrescriberAddress2 = {}
PrescriberAddress2.Name = "PrescriberAddress2";
PrescriberAddress2.Text = "";
LabelItems.push(PrescriberAddress2);

var PrescriberCity = {}
PrescriberCity.Name = "PrescriberCity";
PrescriberCity.Text = msg['body']['SelectableData']['businessData']['RxFillRS']['rx']['RxRS']['prescriber']['PrescriberRS']['address']['AddressRS']['city'].toString().trim();
LabelItems.push(PrescriberCity);


var PrescriberState = {}
PrescriberState.Name = "PrescriberState";
PrescriberState.Text = msg['body']['SelectableData']['businessData']['RxFillRS']['rx']['RxRS']['prescriber']['PrescriberRS']['address']['AddressRS']['stateCode'].toString().trim();
LabelItems.push(PrescriberState);

var PrescriberZip = {}
PrescriberZip.Name = "PrescriberZip";
PrescriberZip.Text = msg['body']['SelectableData']['businessData']['RxFillRS']['rx']['RxRS']['prescriber']['PrescriberRS']['address']['AddressRS']['postalCode'].toString().trim();
LabelItems.push(PrescriberZip);

var PrescriberPhoneNumber = {}
PrescriberPhoneNumber.Name = "PrescriberPhoneNumber";
PrescriberPhoneNumber.Text = msg['body']['SelectableData']['businessData']['RxFillRS']['rx']['RxRS']['prescriber']['PrescriberRS']['address']['AddressRS']['phoneNumber']['TelephoneRS']['areaCode'].toString()+msg['body']['SelectableData']['businessData']['RxFillRS']['rx']['RxRS']['prescriber']['PrescriberRS']['address']['AddressRS']['phoneNumber']['TelephoneRS']['number'].toString();
LabelItems.push(PrescriberPhoneNumber);

var PrescriberType = {}
PrescriberType.Name = "PrescriberType";
PrescriberType.Text = msg['body']['SelectableData']['businessData']['RxFillRS']['rx']['RxRS']['prescriber']['PrescriberRS']['specialty1'].toString();//specialty1
LabelItems.push(PrescriberType);

var ScanCode = {}
ScanCode.Name = "ScanCode";
ScanCode.Text = "";//WorkflowBarCode
LabelItems.push(ScanCode);

var Affiliate = {}
Affiliate.Name = "Affiliate";
Affiliate.Text = "";
LabelItems.push(Affiliate);

var FillDateText = {}
FillDateText.Name = "FillDateText"; //FillDateText present but not useable
FillDateText.Text = "";
LabelItems.push(FillDateText);


var RxExpirationDateText = {}
RxExpirationDateText.Name = "RxExpirationDateText";
RxExpirationDateText.Text = "";
LabelItems.push(RxExpirationDateText);


var ReasonPrescribed = {}
ReasonPrescribed.Name = "ReasonPrescribed";
ReasonPrescribed.Text = "";
LabelItems.push(ReasonPrescribed);

var DrugExpirationDateText = {}
DrugExpirationDateText.Name = "DrugExpirationDateText";
DrugExpirationDateText.Text = msg['body']['SelectableData']['businessData']['RxFillRS']['drugExpiryDate']['Date']['year'].toString()+msg['body']['SelectableData']['businessData']['RxFillRS']['drugExpiryDate']['Date']['month'].toString()+msg['body']['SelectableData']['businessData']['RxFillRS']['drugExpiryDate']['Date']['day'].toString()+msg['body']['SelectableData']['businessData']['RxFillRS']['drugExpiryDate']['Date']['hour'].toString()+msg['body']['SelectableData']['businessData']['RxFillRS']['drugExpiryDate']['Date']['minute'].toString()+msg['body']['SelectableData']['businessData']['RxFillRS']['drugExpiryDate']['Date']['second'].toString();
LabelItems.push(DrugExpirationDateText);


var WarningMessage = {}
WarningMessage.Name = "WarningMessage";
WarningMessage.Text = "";
LabelItems.push(WarningMessage);

var ServiceCode = {}
ServiceCode.Name = "ServiceCode";
ServiceCode.Text = "";
LabelItems.push(ServiceCode);

var BedNumber = {}
BedNumber.Name = "BedNumber";
BedNumber.Text = "";
LabelItems.push(BedNumber);

var BillingCode = {}
BillingCode.Name = "BillingCode";
BillingCode.Text = msg['body']['SelectableData']['businessData']['RxFillRS']['thirdPartyCashIndicator'].toString().trim();
LabelItems.push(BillingCode);

var FacilityID = {}
FacilityID.Name = "FacilityID";
FacilityID.Text = msg['body']['SelectableData']['businessData']['RxFillRS']['dispensingFacility']['PharmacyRS']['facilityID'].toString().trim();
LabelItems.push(FacilityID);

var PillLineGroup = {}
PillLineGroup.Name = "PillLineGroup";
PillLineGroup.Text = "";
LabelItems.push(PillLineGroup);

var PatientFullName = {}
PatientFullName.Name = "PatientFullName";
PatientFullName.Text = "";
LabelItems.push(PatientFullName);


var PrescriberFullName = {}
PrescriberFullName.Name = "PrescriberFullName";
PrescriberFullName.Text = "";
LabelItems.push(PrescriberFullName);

var PharmacistFullName = {}
PharmacistFullName.Name = "PharmacistFullName";
PharmacistFullName.Text = "";
LabelItems.push(PharmacistFullName);

var SupvPrescriberFullName = {}
SupvPrescriberFullName.Name = "SupvPrescriberFullName";
SupvPrescriberFullName.Text = "";//not found
LabelItems.push(SupvPrescriberFullName);

var PrescriberCityStateZip = {}
PrescriberCityStateZip.Name = "PrescriberCityStateZip";
PrescriberCityStateZip.Text = "";
LabelItems.push(PrescriberCityStateZip);

var PatientCityStateZip = {}
PatientCityStateZip.Name = "PatientCityStateZip";
PatientCityStateZip.Text = msg['body']['SelectableData']['businessData']['RxFillRS']['rx']['RxRS']['patient']['PatientRS']['address']['AddressRS']['city'].toString()+" "+msg['body']['SelectableData']['businessData']['RxFillRS']['rx']['RxRS']['patient']['PatientRS']['address']['AddressRS']['stateCode'].toString()+" "+msg['body']['SelectableData']['businessData']['RxFillRS']['rx']['RxRS']['patient']['PatientRS']['address']['AddressRS']['postalCode'].toString();
LabelItems.push(PatientCityStateZip);




var StoreCityStateZip = {}
StoreCityStateZip.Name = "StoreCityStateZip";
StoreCityStateZip.Text = "";
LabelItems.push(StoreCityStateZip);

var SecondaryStoreCityStateZip = {}
SecondaryStoreCityStateZip.Name = "SecondaryStoreCityStateZip";
SecondaryStoreCityStateZip.Text = "";
LabelItems.push(SecondaryStoreCityStateZip);

var PrescriberAddress = {}
PrescriberAddress.Name = "PrescriberAddress";
PrescriberAddress.Text = "";
LabelItems.push(PrescriberAddress);


var PatientAddress = {}
PatientAddress.Name = "PatientAddress";
PatientAddress.Text = "";
LabelItems.push(PatientAddress);

var RxNumberAlt = {}
RxNumberAlt.Name = "RxNumberAlt";
RxNumberAlt.Text = "";
LabelItems.push(RxNumberAlt);

var SecondaryStoreAddress1 = {}
SecondaryStoreAddress1.Name = "SecondaryStoreAddress1";
SecondaryStoreAddress1.Text = "";
LabelItems.push(SecondaryStoreAddress1);

var SecondaryStoreAddress2 = {}
SecondaryStoreAddress2.Name = "SecondaryStoreAddress2";
SecondaryStoreAddress2.Text = "";
LabelItems.push(SecondaryStoreAddress2);


var SecondaryStoreCity = {}
SecondaryStoreCity.Name = "SecondaryStoreCity";
SecondaryStoreCity.Text = "";
LabelItems.push(SecondaryStoreCity);

var SecondaryStoreDEA = {}
SecondaryStoreDEA.Name = "SecondaryStoreDEA";
SecondaryStoreDEA.Text = "";
LabelItems.push(SecondaryStoreDEA);

var SecondaryStoreName = {}
SecondaryStoreName.Name = "SecondaryStoreName";
SecondaryStoreName.Text = "";
LabelItems.push(SecondaryStoreName);


var SecondaryStoreNumber = {}
SecondaryStoreNumber.Name = "SecondaryStoreNumber";
SecondaryStoreNumber.Text = "";
LabelItems.push(SecondaryStoreNumber);


var SecondaryStorePhoneNumber = {}
SecondaryStorePhoneNumber.Name = "SecondaryStorePhoneNumber";
SecondaryStorePhoneNumber.Text = "";
LabelItems.push(SecondaryStorePhoneNumber);

var SecondaryStoreState = {}
SecondaryStoreState.Name = "SecondaryStoreState";
SecondaryStoreState.Text = "";
LabelItems.push(SecondaryStoreState);

var SecondaryStoreZip = {}
SecondaryStoreZip.Name = "SecondaryStoreZip";
SecondaryStoreZip.Text = "";
LabelItems.push(SecondaryStoreZip);


channelMap.put('LabelItems', LabelItems);


// Med //

var Med = {};
Med.Description = msg['body']['SelectableData']['businessData']['RxFillRS']['dispensedProduct']['ProductRS']['packageDescription'].toString().trim();
Med.Id = msg['body']['SelectableData']['businessData']['RxFillRS']['rx']['RxRS']['product']['ProductRS']['nDCMfgCode'].toString().trim() + 
	    msg['body']['SelectableData']['businessData']['RxFillRS']['rx']['RxRS']['product']['ProductRS']['nDCProductCode'].toString().trim() + 
	    msg['body']['SelectableData']['businessData']['RxFillRS']['rx']['RxRS']['product']['ProductRS']['nDCSize'].toString().trim();
Med.MedIdType = 0;
Med.Name = msg['body']['SelectableData']['businessData']['RxFillRS']['dispensedProduct']['ProductRS']['labelName'].toString().trim();
Med.InventorySelector = "";

channelMap.put('Med', Med);

// Doses //
var Doses = null;

// HOA //

var HOA = null;

//Facilities
var Facility = {};
Facility.Id = msg['body']['SelectableData']['businessData']['RxFillRS']['rx']['RxRS']['facility']['PharmacyRS']['facilityID'].toString().trim();
Facility.Bed = "";
Facility.Cabinet = "";
Facility.Floor = "";
Facility.Name = msg['body']['SelectableData']['businessData']['RxFillRS']['rx']['RxRS']['facility']['PharmacyRS']['facilityName'].toString().trim();
Facility.NursingStationId = "";
Facility.Room = "";
Facility.Unit = "";

var FacilityAddresses = []
var FacilityAddress = {}
FacilityAddress.Street1 = msg['body']['SelectableData']['businessData']['RxFillRS']['rx']['RxRS']['facility']['PharmacyRS']['address']['AddressRS']['street1'].toString().trim();
FacilityAddress.Street2 = "";
FacilityAddress.City = msg['body']['SelectableData']['businessData']['RxFillRS']['rx']['RxRS']['facility']['PharmacyRS']['address']['AddressRS']['city'].toString().trim();
FacilityAddress.State = msg['body']['SelectableData']['businessData']['RxFillRS']['rx']['RxRS']['facility']['PharmacyRS']['address']['AddressRS']['stateCode'].toString().trim();
FacilityAddress.Zip = msg['body']['SelectableData']['businessData']['RxFillRS']['rx']['RxRS']['facility']['PharmacyRS']['address']['AddressRS']['postalCode'].toString().trim();
FacilityAddress.Country = msg['body']['SelectableData']['businessData']['RxFillRS']['rx']['RxRS']['facility']['PharmacyRS']['address']['AddressRS']['countryCode'].toString().trim();
FacilityAddress.AddressType = msg['body']['SelectableData']['businessData']['RxFillRS']['rx']['RxRS']['facility']['PharmacyRS']['facilityType'].toString().trim();
FacilityAddress.Primary = "true";

FacilityAddresses.push(FacilityAddress);
Facility.Addresses = FacilityAddresses;





// Scripts //
var Script = {};
Script.Action =  "FILL";// msg['header']['command'].toString().trim(); //
Script.Packaging = 5;
Script.RxNumber = msg['body']['SelectableData']['businessData']['RxFillRS']['rx']['RxRS']['rxNumber'].toString().trim();
Script.RefillNumber = msg['body']['SelectableData']['businessData']['RxFillRS']['refillNumber'].toString().trim();
Script.TransactionId = Script.RxNumber + Script.RefillNumber + "00";
Script.Barcode = Script.TransactionId;//msg['EventData']['PMSBarcode'].toString();
Script.DispenseQuantity = msg['body']['SelectableData']['businessData']['RxFillRS']['dispensedQty'].toString().trim();

var BatchId = UUIDGenerator.getUUID();
Script.BatchId = BatchId;

Script.SequenceNumber = "1";
Script.PatientId = Patient.Id;
Script.FacilityId = null;//Facility.Id;
Script.Med = Med;
Script.DAW = msg['body']['SelectableData']['businessData']['RxFillRS']['dAWCode'].toString() == 0 ? false : true;
Script.DaysSupply = msg['body']['SelectableData']['businessData']['RxFillRS']['daysSupply'].toString();
Script.HOA = null; //HOA; //FOL
Script.LabelItems = LabelItems; //LabelItems; //FOL
Script.RefillsRemaining = parseInt(msg['body']['SelectableData']['businessData']['RxFillRS']['rx']['RxRS']['refillsRemaining'].toString().trim());
Script.RefillsTotal = parseInt(Script.RefillNumber) + parseInt(Script.RefillsRemaining); //FOL
Script.PartialNumber = "0";
Script.RxExpirationDate = FormateDate(msg['body']['SelectableData']['businessData']['RxFillRS']['rx']['RxRS']['rxExpiryDate']['Date']['year'].toString()+ 
					"/" + msg['body']['SelectableData']['businessData']['RxFillRS']['rx']['RxRS']['rxExpiryDate']['Date']['month'].toString() + 
					"/" + msg['body']['SelectableData']['businessData']['RxFillRS']['rx']['RxRS']['rxExpiryDate']['Date']['day'].toString());
Script.Sig = msg['body']['SelectableData']['businessData']['RxFillRS']['rx']['RxRS']['directions'].toString().trim();
Script.Urgency = "0";//CalculateUrgency(msg['body']['SelectableData']['businessData']['RxFillRS']['deliveryMethod'].toString());

channelMap.put('Script', Script);


// Batch //
var Batch = {};

var Scripts = [];
Scripts.push(Script);
var Facilities = [];
Facilities.push(Facility);
var Patients = [];
Patients.push(Patient);

Batch.Id = BatchId;
Batch.TransmissionId = "";
Batch.ScriptCount = Scripts.length;
Batch.SourceTerminal = "UNKNOWN";
Batch.Scripts = Scripts;
Batch.Facilities = Facilities;
Batch.Patients = Patients;

channelMap.put('Batch', Batch);


//Utils function

function CalculateUrgency(key){

	var urgency = {
			     WAITING : "WA",
		          PICK :"PU",
		          HIGH : "HP",
		          DELIVER : "DE",
		          SHIP :"SH",
		          DRIVE : "DT",
		          AUTO : "AR"       		
			}
		
	if(urgency[key.toUpperCase()] !== undefined)
		return urgency[key.toUpperCase()];
	else
		return "AR";
}