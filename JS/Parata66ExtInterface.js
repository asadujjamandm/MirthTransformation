// Message Type //
var type = msg['Msg_Header']['MsgType'].toString().trim();

// Address //

var Address = {};
Address.Street1 = msg['FillData']['PatientAddress']['Address1'].toString().trim();
Address.Street2 = msg['FillData']['PatientAddress']['Address2'].toString().trim();
Address.City = msg['FillData']['PatientAddress']['City'].toString().trim();
Address.State = msg['FillData']['PatientAddress']['State'].toString().trim();
Address.ZIP = msg['FillData']['PatientAddress']['Zip'].toString().trim();
Address.Country = null;
Address.AddressType = "Home";
Address.Primary = "true";

var Addresses = [];

Addresses.push(Address);



channelMap.put('Address', Address);
channelMap.put('Addresses', Addresses);



// PhoneNumber //

var PhoneNumberH = {};
PhoneNumberH.Number = msg['FillData']['PatientPhoneNumber'].toString().trim();
PhoneNumberH.Type = "Home";


var PhoneNumbers = [];

if(!IsNullOrEmpty(PhoneNumberH.Number)){
	PhoneNumbers.push(PhoneNumberH);
}


// Patient //

var Patient = {};

Patient.Id = msg['FillData']['PatientID'].toString().trim();
Patient.LastName = msg['FillData']['DispenseData']['PatientName']['LastName'].toString().trim();
Patient.FirstName = msg['FillData']['DispenseData']['PatientName']['FirstName'].toString().trim();
Patient.DOB = FormateDate(msg['FillData']['PatientDOB'].toString().trim());
Patient.IdType = null;
Patient.Initials = null;
Patient.MiddleName = msg['FillData']['DispenseData']['PatientName']['MiddleInitial'].toString().trim();
Patient.Addresses = Addresses;
Patient.PhoneNumbers = PhoneNumbers;
Patient.Sex = IsNullOrEmpty(msg['FillData']['PatientGender'].toString().trim()) ? "Undeclared" : msg['FillData']['PatientGender'].toString().trim();
channelMap.put('Patient', Patient);

// LabelItems //

var LabelItems = [];

var RxNumber = {}
RxNumber.Name = "RxNumber";
RxNumber.Text = msg['FillData']['DispenseData']['RxNumber'].toString().trim();
LabelItems.push(RxNumber);

var RefillNumber = {}
RefillNumber.Name = "RefillNumber";
RefillNumber.Text = msg['FillData']['DispenseData']['RefillNumber'].toString();
LabelItems.push(RefillNumber);

var PatientTitle = {}
PatientTitle.Name = "PatientTitle";
PatientTitle.Text = msg['FillData']['DispenseData']['PatientName']['Title'].toString();
LabelItems.push(PatientTitle);

var PatientFirstName = {}
PatientFirstName.Name = "PatientFirstName";
PatientFirstName.Text = msg['FillData']['DispenseData']['PatientName']['FirstName'].toString();
LabelItems.push(PatientFirstName);

var PatientMiddleName = {}
PatientMiddleName.Name = "PatientMiddleName";
PatientMiddleName.Text = msg['FillData']['DispenseData']['PatientName']['MiddleInitial'].toString();
LabelItems.push(PatientMiddleName);

var PatientLastName = {}
PatientLastName.Name = "PatientLastName";
PatientLastName.Text = msg['FillData']['DispenseData']['PatientName']['LastName'].toString();
LabelItems.push(PatientLastName);

var DrugNDC = {}
DrugNDC.Name = "DrugNDC";
DrugNDC.Text = msg['FillData']['DispenseData']['DrugNDC'].toString();
LabelItems.push(DrugNDC);

var DispensedDrugName = {}
DispensedDrugName.Name = "DispensedDrugName";
DispensedDrugName.Text = msg['FillData']['DispenseData']['DispensedDrugName'].toString();
LabelItems.push(DispensedDrugName);

var AltDispensedDrugName = {}
AltDispensedDrugName.Name = "AltDispensedDrugName";
AltDispensedDrugName.Text = msg['FillData']['DispenseData']['AltDispensedDrugName'].toString();
LabelItems.push(AltDispensedDrugName);

var InventorySelector = {}
InventorySelector.Name = "InventorySelector";
InventorySelector.Text = msg['FillData']['DispenseData']['InventorySelector'].toString();
LabelItems.push(InventorySelector);

var DispenseQuantity = {}
DispenseQuantity.Name = "DispenseQuantity";
DispenseQuantity.Text = msg['FillData']['DispenseData']['DispenseQuantity'].toString();
LabelItems.push(DispenseQuantity);

var Urgency = {}
Urgency.Name = "Urgency";
Urgency.Text = msg['FillData']['DispenseData']['Urgency'].toString();
LabelItems.push(Urgency);

var Price = {}
Price.Name = "Price";
Price.Text = msg['FillData']['Price'].toString();
LabelItems.push(Price);

var Liquid = {}
Liquid.Name = "Liquid";
Liquid.Text = msg['FillData']['Liquid'].toString(); 
LabelItems.push(Liquid);

var Refrigerated = {}
Refrigerated.Name = "Refrigerated";
Refrigerated.Text = msg['FillData']['Refrigerated'].toString();
LabelItems.push(Refrigerated);

var RefillsLeft = {}
RefillsLeft.Name = "RefillsLeft";
RefillsLeft.Text = msg['FillData']['RefillsRemaining'].toString();
LabelItems.push(RefillsLeft);

var TotalRefills = {}
TotalRefills.Name = "TotalRefills";
TotalRefills.Text = msg['FillData']['RefillsAuthorized'].toString();
LabelItems.push(TotalRefills);

var RxOrigDate = {}
RxOrigDate.Name = "RxOrigDate";
RxOrigDate.Text = FormateDate(msg['FillData']['RxStartDate'].toString());
LabelItems.push(RxOrigDate);

var RefillDate = {}
RefillDate.Name = "RefillDate";
RefillDate.Text = FormateDate(msg['FillData']['RefillDate'].toString());
LabelItems.push(RefillDate);

var DAW = {}
DAW.Name = "DAW";
DAW.Text = msg['FillData']['DispenseAsWritten'].toString();
LabelItems.push(DAW);

var FillDate = {}
FillDate.Name = "FillDate";
FillDate.Text = FormateDate(msg['FillData']['FillDate'].toString());
LabelItems.push(FillDate);

var RxExpirationDate = {}
RxExpirationDate.Name = "RxExpirationDate";
RxExpirationDate.Text = FormateDate(msg['FillData']['RxExpirationDate'].toString());
LabelItems.push(RxExpirationDate);

var DiscardDate = {}
DiscardDate.Name = "DiscardDate";
DiscardDate.Text = FormateDate(msg['FillData']['DiscardDate'].toString());
LabelItems.push(DiscardDate);

var PreviousFillDate = {}
PreviousFillDate.Name = "PreviousFillDate";
PreviousFillDate.Text = FormateDate(msg['FillData']['PreviousFillDate'].toString());
LabelItems.push(PreviousFillDate);

var PrescribedDrugName = {}
PrescribedDrugName.Name = "PrescribedDrugName";
PrescribedDrugName.Text = msg['FillData']['PrescribedDrugName'].toString();
LabelItems.push(PrescribedDrugName);

var PrescribedDrugChemicalName = {}
PrescribedDrugChemicalName.Name = "PrescribedDrugChemicalName";
PrescribedDrugChemicalName.Text = msg['FillData']['PrescribedDrugChemicalName'].toString();
LabelItems.push(PrescribedDrugChemicalName);

var DrugSchedule = {}
DrugSchedule.Name = "DrugSchedule";
DrugSchedule.Text = msg['FillData']['DrugClass'].toString(); // DrugClass (not sure)
LabelItems.push(DrugSchedule);

var CompoundCode = {}
CompoundCode.Name = "CompoundCode";
CompoundCode.Text = msg['FillData']['CompoundCode'].toString();
LabelItems.push(CompoundCode);

var DrugMfg = {}
DrugMfg.Name = "DrugMfg";
DrugMfg.Text = msg['FillData']['DrugMfg'].toString();
LabelItems.push(DrugMfg);

var DrugImprint = {}
DrugImprint.Name = "DrugImprint";
DrugImprint.Text = msg['FillData']['DrugImprint'].toString();
LabelItems.push(DrugImprint);

var DrugForm = {}
DrugForm.Name = "DrugForm";
DrugForm.Text = msg['FillData']['DrugFormulation'].toString();
LabelItems.push(DrugForm);

var DrugStrength = {}
DrugStrength.Name = "DrugStrength";
DrugStrength.Text = msg['FillData']['DrugStrength'].toString();
LabelItems.push(DrugStrength);



var DaysSupply = {}
DaysSupply.Name = "DaysSupply";
DaysSupply.Text = msg['FillData']['DaysSupply'].toString();
LabelItems.push(DaysSupply);

var Warning1 = {}
Warning1.Name = "Warning1";
Warning1.Text = msg['FillData']['DrugWarningLabel1'].toString();
LabelItems.push(Warning1);


var Warning2 = {}
Warning2.Name = "Warning2";
Warning2.Text = msg['FillData']['DrugWarningLabel2'].toString();
LabelItems.push(Warning2);


var Warning3 = {}
Warning3.Name = "Warning3";
Warning3.Text = msg['FillData']['DrugWarningLabel3'].toString();
LabelItems.push(Warning3);

var Warning4 = {}
Warning4.Name = "Warning4";
Warning4.Text = msg['FillData']['DrugWarningLabel4'].toString();
LabelItems.push(Warning4);


var Warning5 = {}
Warning5.Name = "Warning5";
Warning5.Text = msg['FillData']['DrugWarningLabel5'].toString();
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
WarningBitmap5.Text = null;
LabelItems.push(WarningBitmap5);


var Sig = {}
Sig.Name = "Sig";
Sig.Text = msg['FillData']['Sig'].toString();
LabelItems.push(Sig);


var UnicodeSig = {}
UnicodeSig.Name = "UnicodeSig";
UnicodeSig.Text = msg['FillData']['UnicodeSig'].toString();
LabelItems.push(UnicodeSig);

var SafetyCap = {}
SafetyCap.Name = "SafetyCap";
SafetyCap.Text = msg['FillData']['SafetyCap'].toString();
LabelItems.push(SafetyCap);


var StoreAddress1 = {}
StoreAddress1.Name = "StoreAddress1";
StoreAddress1.Text = msg['FillData']['StoreAddress']['Address1'].toString();
LabelItems.push(StoreAddress1);

var StoreAddress2 = {}
StoreAddress2.Name = "StoreAddress2";
StoreAddress2.Text = msg['FillData']['StoreAddress']['Address2'].toString();
LabelItems.push(StoreAddress2);

var StoreCity = {};
StoreCity.Name = "StoreCity";
StoreCity.Text = msg['FillData']['StoreAddress']['City'].toString()
LabelItems.push(StoreCity);


var StoreDEA = {};
StoreDEA.Name = "StoreDEA";
StoreDEA.Text = msg['FillData']['StoreDEA'].toString().trim();
LabelItems.push(StoreDEA);


var StoreName = {}
StoreName.Name = "StoreName";
StoreName.Text = msg['FillData']['StoreName'].toString().trim();
LabelItems.push(StoreName);


var StoreNumber = {}
StoreNumber.Name = "StoreNumber";
StoreNumber.Text = msg['FillData']['StoreNumber'].toString().trim();
LabelItems.push(StoreNumber);

var StorePhoneNumber = {}
StorePhoneNumber.Name = "StorePhoneNumber";
StorePhoneNumber.Text = msg['FillData']['StorePhoneNumber'].toString().trim();
LabelItems.push(StorePhoneNumber);


var StoreState = {}
StoreState.Name = "StoreState";
StoreState.Text = msg['FillData']['StoreAddress']['State'].toString().trim();
LabelItems.push(StoreState);

var StoreZip = {};
StoreZip.Name = "StoreZip"
StoreZip.Text = msg['FillData']['StoreAddress']['Zip'].toString().trim();
LabelItems.push(StoreZip);


var TotalPillsPrescribed = {}
TotalPillsPrescribed.Name = "TotalPillsPrescribed";
TotalPillsPrescribed.Text = msg['FillData']['TotalPillsPrescribed'].toString().trim();
LabelItems.push(TotalPillsPrescribed);

var TotalPillsRemaining = {}
TotalPillsRemaining.Name = "TotalPillsRemaining";
TotalPillsRemaining.Text = msg['FillData']['TotalPillsRemaining'].toString();
LabelItems.push(TotalPillsRemaining);

var PharmacistTitle = {}
PharmacistTitle.Name = "PharmacistTitle";
PharmacistTitle.Text = msg['FillData']['PharmacistName']['Title'].toString();
LabelItems.push(PharmacistTitle);

var PharmacistFirstName = {}
PharmacistFirstName.Name = "PharmacistFirstName";
PharmacistFirstName.Text = msg['FillData']['PharmacistName']['FirstName'].toString();
LabelItems.push(PharmacistFirstName);

var PharmacistMiddleName = {};
PharmacistMiddleName.Name = "PharmacistMiddleName";
PharmacistMiddleName.Text = msg['FillData']['PharmacistName']['MiddleInitial'].toString().trim();
LabelItems.push(PharmacistMiddleName);

var PharmacistLastName = {}
PharmacistLastName.Name = "PharmacistLastName";
PharmacistLastName.Text = msg['FillData']['PharmacistName']['LastName'].toString().trim();
LabelItems.push(PharmacistLastName);

var RPhLicenseNumber = {}
RPhLicenseNumber.Name = "RPhLicenseNumber";
RPhLicenseNumber.Text = msg['FillData']['RphLicenseNum'].toString().trim();
LabelItems.push(RPhLicenseNumber);

var RPhInitials = {}
RPhInitials.Name = "RPhInitials";
RPhInitials.Text = msg['FillData']['RphInitials'].toString().trim();
LabelItems.push(RPhInitials);

var RxOrigin = {}
RxOrigin.Name = "RxOrigin";
RxOrigin.Text = msg['FillData']['RxOrigin'].toString().trim();
LabelItems.push(RxOrigin);

var TechInitials = {}
TechInitials.Name = "TechInitials";
TechInitials.Text = msg['FillData']['TechInitials'].toString().trim();
LabelItems.push(TechInitials);

var EntryInitials = {}
EntryInitials.Name = "EntryInitials";
EntryInitials.Text = msg['FillData']['EntryInitials'].toString().trim();
LabelItems.push(EntryInitials);

var EntryDate = {}
EntryDate.Name = "EntryDate";
EntryDate.Text = FormateDate(msg['FillData']['EntryDate'].toString());
LabelItems.push(EntryDate);

var SourceTerminal = {}
SourceTerminal.Name = "SourceTerminal";
SourceTerminal.Text = msg['FillData']['SourceTerminal'].toString();
LabelItems.push(SourceTerminal);

var PatientAddress1 = {}
PatientAddress1.Name = "PatientAddress1";
PatientAddress1.Text = msg['FillData']['PatientAddress']['Address1'].toString() ;
LabelItems.push(PatientAddress1);

var PatientAddress2 = {}
PatientAddress2.Name = "PatientAddress2";
PatientAddress2.Text = msg['FillData']['PatientAddress']['Address2'].toString();
LabelItems.push(PatientAddress2);

var PatientCity = {}
PatientCity.Name = "PatientCity";
PatientCity.Text = msg['FillData']['PatientAddress']['City'].toString();
LabelItems.push(PatientCity);

var PatientState = {}
PatientState.Name = "PatientState";
PatientState.Text = msg['FillData']['PatientAddress']['State'].toString();
LabelItems.push(PatientState);

var PatientZip = {}
PatientZip.Name = "PatientZip";
PatientZip.Text = msg['FillData']['PatientAddress']['Zip'].toString();
LabelItems.push(PatientZip);

var PatientSSN = {}
PatientSSN.Name = "PatientSSN";
PatientSSN.Text = msg['FillData']['PatientSSN'].toString();
LabelItems.push(PatientSSN);

var PatientID = {}
PatientID.Name = "PatientID";
PatientID.Text = msg['FillData']['PatientID'].toString();
LabelItems.push(PatientID);

var FamilyID = {}
FamilyID.Name = "FamilyID";
FamilyID.Text = msg['FillData']['FamilyID'].toString().trim();
LabelItems.push(FamilyID);

var PatientDOB = {}
PatientDOB.Name = "PatientDOB";
PatientDOB.Text = FormateDate(msg['FillData']['PatientDOB'].toString());
LabelItems.push(PatientDOB);

var PatientPhoneNumber = {}
PatientPhoneNumber.Name = "PatientPhoneNumber";
PatientPhoneNumber.Text = msg['FillData']['PatientPhoneNumber'].toString();
LabelItems.push(PatientPhoneNumber);

var PrescriberTitle = {}
PrescriberTitle.Name = "PrescriberTitle";
PrescriberTitle.Text = msg['FillData']['PrescriberName']['Title'].toString();
LabelItems.push(PrescriberTitle);

var PrescriberFirstName = {}
PrescriberFirstName.Name = "PrescriberFirstName";
PrescriberFirstName.Text = msg['FillData']['PrescriberName']['FirstName'].toString();
LabelItems.push(PrescriberFirstName);

var PrescriberMiddleName = {}
PrescriberMiddleName.Name = "PrescriberMiddleName";
PrescriberMiddleName.Text = msg['FillData']['PrescriberName']['MiddleInitial'].toString();
LabelItems.push(PrescriberMiddleName);

var PrescriberLastName = {}
PrescriberLastName.Name = "PrescriberLastName";
PrescriberLastName.Text = msg['FillData']['PrescriberName']['LastName'].toString();
LabelItems.push(PrescriberLastName);

var PrescriberDEA = {}
PrescriberDEA.Name = "PrescriberDEA";
PrescriberDEA.Text = msg['FillData']['PrescriberDEA'].toString();
LabelItems.push(PrescriberDEA);

var PrescriberNPI = {}
PrescriberNPI.Name = "PrescriberNPI";
PrescriberNPI.Text = msg['FillData']['PrescriberNPI'].toString();
LabelItems.push(PrescriberNPI);

var PrescriberAddress1 = {}
PrescriberAddress1.Name = "PrescriberAddress1";
PrescriberAddress1.Text = msg['FillData']['PrescriberAddress']['Address1'].toString();
LabelItems.push(PrescriberAddress1);

var PrescriberAddress2 = {}
PrescriberAddress2.Name = "PrescriberAddress2";
PrescriberAddress2.Text = msg['FillData']['PrescriberAddress']['Address2'].toString();
LabelItems.push(PrescriberAddress2);

var PrescriberCity = {}
PrescriberCity.Name = "PrescriberCity";
PrescriberCity.Text = msg['FillData']['PrescriberAddress']['City'].toString();
LabelItems.push(PrescriberCity);


var PrescriberState = {}
PrescriberState.Name = "PrescriberState";
PrescriberState.Text = msg['FillData']['PrescriberAddress']['State'].toString();
LabelItems.push(PrescriberState);

var PrescriberZip = {}
PrescriberZip.Name = "PrescriberZip";
PrescriberZip.Text = msg['FillData']['PrescriberAddress']['Zip'].toString();
LabelItems.push(PrescriberZip);

var PrescriberPhoneNumber = {}
PrescriberPhoneNumber.Name = "PrescriberPhoneNumber";
PrescriberPhoneNumber.Text = msg['FillData']['PrescriberPhoneNumber'].toString();
LabelItems.push(PrescriberPhoneNumber);

var PrescriberType = {}
PrescriberType.Name = "PrescriberType";
PrescriberType.Text = msg['FillData']['PrescriberType'].toString();
LabelItems.push(PrescriberType);

var ScanCode = {}
ScanCode.Name = "ScanCode";
ScanCode.Text = msg['FillData']['WorkFlowBarcode'].toString();//WorkflowBarCode
LabelItems.push(ScanCode);

var Affiliate = {}
Affiliate.Name = "Affiliate";
Affiliate.Text = msg['FillData']['Affiliate'].toString();
LabelItems.push(Affiliate);

var FillDateText = {}
FillDateText.Name = "FillDateText";
FillDateText.Text = msg['FillData']['FillDateText'].toString();
LabelItems.push(FillDateText);


var RxExpirationDateText = {}
RxExpirationDateText.Name = "RxExpirationDateText";
RxExpirationDateText.Text = msg['FillData']['RxExpirationDateText'].toString();
LabelItems.push(RxExpirationDateText);


var ReasonPrescribed = {}
ReasonPrescribed.Name = "ReasonPrescribed";
ReasonPrescribed.Text = msg['FillData']['ReasonPrescribed'].toString();
LabelItems.push(ReasonPrescribed);

var DrugExpirationDateText = {}
DrugExpirationDateText.Name = "DrugExpirationDateText";
DrugExpirationDateText.Text = msg['FillData']['DrugExpirationDateText'].toString();
LabelItems.push(DrugExpirationDateText);

var WarningMessage = {}
WarningMessage.Name = "WarningMessage";
WarningMessage.Text = msg['FillData']['WarningMessage'].toString();
LabelItems.push(WarningMessage);

var ServiceCode = {}
ServiceCode.Name = "ServiceCode";
ServiceCode.Text = msg['FillData']['ServiceCode'].toString();
LabelItems.push(ServiceCode);

var BedNumber = {}
BedNumber.Name = "BedNumber";
BedNumber.Text = msg['FillData']['BedNumber'].toString();
LabelItems.push(BedNumber);

var BillingCode = {}
BillingCode.Name = "BillingCode";
BillingCode.Text = msg['FillData']['BillingCode'].toString();
LabelItems.push(BillingCode);

var FacilityID = {}
FacilityID.Name = "FacilityID";
FacilityID.Text = msg['FillData']['FacilityID'].toString();
LabelItems.push(FacilityID);

var PillLineGroup = {}
PillLineGroup.Name = "PillLineGroup";
PillLineGroup.Text = msg['FillData']['PillLineGroup'].toString();
LabelItems.push(PillLineGroup);

var PatientFullName = {}
PatientFullName.Name = "PatientFullName";
PatientFullName.Text = null;

LabelItems.push(PatientFullName);


var PrescriberFullName = {}
PrescriberFullName.Name = "PrescriberFullName";
PrescriberFullName.Text = null;

LabelItems.push(PrescriberFullName);

var PharmacistFullName = {}
PharmacistFullName.Name = "PharmacistFullName";
PharmacistFullName.Text = null;

LabelItems.push(PharmacistFullName);

var SupvPrescriberFullName = {}
SupvPrescriberFullName.Name = "SupvPrescriberFullName";
SupvPrescriberFullName.Text = null;//not found
LabelItems.push(SupvPrescriberFullName);

var PrescriberCityStateZip = {}
PrescriberCityStateZip.Name = "PrescriberCityStateZip";
PrescriberCityStateZip.Text = null;

LabelItems.push(PrescriberCityStateZip);

var PatientCityStateZip = {}
PatientCityStateZip.Name = "PatientCityStateZip";
PatientCityStateZip.Text = null;

LabelItems.push(PatientCityStateZip);

var StoreCityStateZip = {}
StoreCityStateZip.Name = "StoreCityStateZip";
StoreCityStateZip.Text = null;

LabelItems.push(StoreCityStateZip);

var SecondaryStoreCityStateZip = {}
SecondaryStoreCityStateZip.Name = "SecondaryStoreCityStateZip";
SecondaryStoreCityStateZip.Text = null;

LabelItems.push(SecondaryStoreCityStateZip);

var PrescriberAddress = {}
PrescriberAddress.Name = "PrescriberAddress";
PrescriberAddress.Text = null;

LabelItems.push(PrescriberAddress);


var PatientAddress = {}
PatientAddress.Name = "PatientAddress";
PatientAddress.Text = null;

LabelItems.push(PatientAddress);

var RxNumberAlt = {}
RxNumberAlt.Name = "RxNumberAlt";
RxNumberAlt.Text = null;
LabelItems.push(RxNumberAlt);

var SecondaryStoreAddress1 = {}
SecondaryStoreAddress1.Name = "SecondaryStoreAddress1";
SecondaryStoreAddress1.Text = msg['FillData']['SecondaryStoreAddress']['Address1'].toString().trim();
LabelItems.push(SecondaryStoreAddress1);

var SecondaryStoreAddress2 = {}
SecondaryStoreAddress2.Name = "SecondaryStoreAddress2";
SecondaryStoreAddress2.Text = msg['FillData']['SecondaryStoreAddress']['Address2'].toString().trim();
LabelItems.push(SecondaryStoreAddress2);


var SecondaryStoreCity = {}
SecondaryStoreCity.Name = "SecondaryStoreCity";
SecondaryStoreCity.Text = msg['FillData']['SecondaryStoreAddress']['City'].toString().trim();
LabelItems.push(SecondaryStoreCity);

var SecondaryStoreDEA = {}
SecondaryStoreDEA.Name = "SecondaryStoreDEA";
SecondaryStoreDEA.Text = msg['FillData']['SecondaryStoreDEA'].toString().trim();
LabelItems.push(SecondaryStoreDEA);

var SecondaryStoreName = {}
SecondaryStoreName.Name = "SecondaryStoreName";
SecondaryStoreName.Text = msg['FillData']['SecondaryStoreName'].toString().trim();
LabelItems.push(SecondaryStoreName);


var SecondaryStoreNumber = {}
SecondaryStoreNumber.Name = "SecondaryStoreNumber";
SecondaryStoreNumber.Text = msg['FillData']['SecondaryStoreNumber'].toString().trim();
LabelItems.push(SecondaryStoreNumber);


var SecondaryStorePhoneNumber = {}
SecondaryStorePhoneNumber.Name = "SecondaryStorePhoneNumber";
SecondaryStorePhoneNumber.Text = msg['FillData']['SecondaryStorePhoneNumber'].toString();
LabelItems.push(SecondaryStorePhoneNumber);

var SecondaryStoreState = {}
SecondaryStoreState.Name = "SecondaryStoreState";
SecondaryStoreState.Text = msg['FillData']['SecondaryStoreAddress']['State'].toString();
LabelItems.push(SecondaryStoreState);

var SecondaryStoreZip = {}
SecondaryStoreZip.Name = "SecondaryStoreZip";
SecondaryStoreZip.Text = msg['FillData']['SecondaryStoreAddress']['Zip'].toString();
LabelItems.push(SecondaryStoreZip);

channelMap.put('LabelItems', LabelItems);

// Med //

var Med = {};
Med.Description = msg['FillData']['PrescribedDrugName'].toString().trim();
if(IsNullOrEmpty(Med.Description)){
	Med.Description = msg['FillData']['PrescribedDrugName'].toString().trim();
}
Med.Id = msg['FillData']['DispenseData']['DrugNDC'].toString().trim();
Med.MedIdType = 0;
Med.Name = msg['FillData']['PrescribedDrugName'].toString().trim();
Med.InventorySelector = "";
channelMap.put('Med', Med);


// Doses //
var Doses = [];
var Dose = {};

Dose.AdminDateTime = FormateDate(msg['FillData']['HOA']['ExplicitSchedule']['Dose']['Date'].toString().trim());
var doseQuantity = msg['FillData']['HOA']['ExplicitSchedule']['Dose']['Quantity'].toString().trim();
Dose.Quantity = IsNullOrEmpty(doseQuantity) ? '1' : doseQuantity;
Dose.Sig = msg['FillData']['Sig'].toString().trim();
Dose.TimeName = msg['FillData']['HOA']['ExplicitSchedule']['Dose']['Time'].toString().trim(); //FillData/HOA/ImplicitSchedule/Dose/Time

Doses.push(Dose);

// HOA //

var HOA = {};

HOA.StartDate = FormateDate(msg['FillData']['HOA']['StartDate'].toString().trim());
HOA.EndDate = FormateDate(msg['FillData']['HOA']['EndDate'].toString().trim());
HOA.Doses = Doses;
HOA.ScheduleType = 0;

channelMap.put('HOA', HOA);

// Scripts //

var Script = {};

logger.info(msg['FillData']['DispenseData']['Action'].toString());
Script.Action = ProcessScriptAction(msg['FillData']['DispenseData']['Action'].toString().trim());
Script.Packaging = DoesHOAExists(HOA) === true ? 1:5; //Adherence 1; Blister 2; Manual 3; Pouch 4; Vial 5;
Script.RxNumber = msg['FillData']['DispenseData']['RxId'].toString().trim();
Script.RefillNumber = parseFloat(msg['FillData']['DispenseData']['RefillNumber'].toString());
Script.TransactionId = Script.RxNumber + Script.RefillNumber + "00";
Script.Barcode = Script.TransactionId
Script.DispenseQuantity = parseFloat(msg['FillData']['DispenseData']['DispenseQuantity'].toString());

var BatchId = UUIDGenerator.getUUID();
Script.BatchId = BatchId;

Script.SequenceNumber = 1;
Script.PatientId = Patient.Id;
Script.FacilityId =msg['FillData']['FacilityID'].toString().trim();
Script.Med = Med;
Script.DAW = msg['FillData']['DispenseAsWritten'].toString().trim() === "0" ? false : true; //boolean
Script.DaysSupply = IsNullOrEmpty(parseInt(msg['FillData']['DaysSupply'].toString())) ? 0 : parseInt(msg['FillData']['DaysSupply'].toString());
Script.HOA = null;
Script.LabelItems = LabelItems;
Script.RefillsRemaining = parseFloat(msg['FillData']['RefillsRemaining'].toString());// numeric
Script.RefillsTotal = parseFloat(Script.RefillNumber + Script.RefillsRemaining); // numeric
Script.PartialNumber = 0;
Script.RxExpirationDate = FormateDate(msg['FillData']['RxExpirationDate'].toString().trim());
Script.SafetyCap = msg['FillData']['SafetyCap'].toString();
Script.Sig = msg['FillData']['Sig'].toString().trim();
Script.Urgency = msg['FillData']['DispenseData']['Urgency'].toString().trim(); //numeric

channelMap.put('Script', Script);

// Facility //

var Facility = {};
Facility.Id = msg['FillData']['FacilityID'].toString();
Facility.Bed = msg['FillData']['BedNumber'].toString();
Facility.Cabinet = null;
Facility.Floor = null;
Facility.Name = null;
Facility.NursingStationId = null;
Facility.Room = null;
Facility.Unit = null;
Facility.Addresses = [];

var FacilityAddress = {};
FacilityAddress.Street1 = msg['FillData']['StoreAddress']['Address1'].toString().trim();
FacilityAddress.Street2 = msg['FillData']['StoreAddress']['Address2'].toString().trim();
FacilityAddress.City = msg['FillData']['StoreAddress']['City'].toString().trim();
FacilityAddress.State = msg['FillData']['StoreAddress']['State'].toString().trim();
FacilityAddress.Zip = msg['FillData']['StoreAddress']['Zip'].toString().trim();;
FacilityAddress.Country = "";
FacilityAddress.AddressType = "Home";
FacilityAddress.Primary = "true";

Facility.Addresses.push(FacilityAddress);


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
Batch.SourceTerminal = msg['FillData']['SourceTerminal'].toString().trim();
Batch.Scripts = Scripts;
Batch.Facilities = Facilities;
Batch.Patients = Patients;

channelMap.put('Batch', Batch);