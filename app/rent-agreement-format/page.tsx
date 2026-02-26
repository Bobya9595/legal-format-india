const generateAgreement = () => {
  const today = new Date().toLocaleDateString("en-IN");

  const agreement = `
RENT AGREEMENT

THIS RENT AGREEMENT is made and executed on ${today} at ${city}.

BETWEEN

Mr./Ms. ${landlordName}, residing at ${landlordAddress}, hereinafter referred to as the "LANDLORD" (which expression shall mean and include his/her heirs, successors and assigns);

AND

Mr./Ms. ${tenantName}, residing at ${tenantAddress}, hereinafter referred to as the "TENANT" (which expression shall mean and include his/her heirs, successors and assigns).

WHEREAS:

1. The Landlord is the absolute owner of the property situated at:
   ${propertyAddress} (hereinafter referred to as the "Demised Premises").

2. The Tenant has requested to take the said premises on rent for ${useType} purposes.

NOW THIS AGREEMENT WITNESSETH AS FOLLOWS:

1. TERM:
   The tenancy shall commence for a period of ${duration} months.

2. RENT:
   The Tenant agrees to pay a monthly rent of ₹${rentAmount}, payable on or before the ${rentDueDate} day of each month.

3. SECURITY DEPOSIT:
   The Tenant has paid a refundable security deposit of ₹${securityDeposit}.

4. LOCK-IN PERIOD:
   The lock-in period shall be ${lockInPeriod} months.

5. MAINTENANCE:
   ${maintenanceClause}

6. UTILITIES:
   ${utilitiesClause}

7. USE OF PREMISES:
   The premises shall be used strictly for ${useType} purposes only.

8. NOTICE PERIOD:
   Either party may terminate this agreement by giving ${noticePeriod} days written notice.

9. SUB-LETTING:
   The Tenant shall not sub-let the premises without prior written consent of the Landlord.

10. JURISDICTION:
   This agreement shall be governed by the laws of India and subject to the jurisdiction of courts at ${city}.

IN WITNESS WHEREOF both parties have signed this agreement on the date mentioned above.

----------------------------

LANDLORD SIGNATURE

----------------------------

TENANT SIGNATURE

----------------------------

WITNESS 1

----------------------------

WITNESS 2
`;

  setAgreementText(agreement);
};
