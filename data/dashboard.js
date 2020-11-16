export const userData = [
  {
    label: 'Primary Name',
    value: 'Jack Sorrells'
  }, {
    label: 'Primary ID',
    value: '16508'
  }, {
    label: 'Primary DOB',
    value: '1990-09-25'
  }, {
    label: 'Email',
    value: 'jack.sorrells@membersy.com'
  }, {
    label: 'Street Address',
    value: '2300 Hancock Dr. Unit 110'
  }, {
    label: 'Phone',
    value: '2544951940'
  }, {
    label: 'City, State, ZIP',
    value: 'Austin TX, 78756'
  }, {
    label: 'Language',
    value: 'English'
  }
];

export const membershipColumns = [
  {
    title: "Start Date",
    dataIndex: "startDate",
    key: "startDate"
  },
  {
    title: "Renewal Date",
    dataIndex: "renewalDate",
    key: "renewalDate"
  },
  {
    title: "No. Members",
    dataIndex: "numMembers",
    key: "numMembers"
  },
  {
    title: "Annual Price",
    dataIndex: "annualPrice",
    key: "annualPrice"
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status"
  },
  {
    title: "Actions",
    dataIndex: "actions",
    key: "actions"
  }
];

export const membershipData = [
  {
    key: "1",
    startDate: "10-26-2020",
    renewalDate: "10-26-2021",
    numMembers: 1,
    annualPrice: "99.00",
    status: "Current"
  },
  {
    key: "2",
    startDate: "10-26-2020",
    renewalDate: "10-26-2021",
    numMembers: 1,
    annualPrice: "99.00",
    status: "Current"
  },
  {
    key: "3",
    startDate: "10-26-2020",
    renewalDate: "10-26-2021",
    numMembers: 1,
    annualPrice: "99.00",
    status: "Current"
  }
];

export const paymentsColumns = [
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date'
  }, {
    title: 'Description',
    dataIndex: 'description',
    key: 'description'
  }, {
    title: 'Amount',
    dataIndex: 'amount',
    key: 'amount'
  }, {
    title: 'Payment Type',
    dataIndex: 'paymentType',
    key: 'paymentType'
  }, {
    title: 'Status',
    dataIndex: 'status',
    key: 'status'
  }, {
    title: 'Receipt',
    dataIndex: 'receiptUrl',
    key: 'receiptUrl'
  }
];

export const paymentsData = [
  {
    key: '1',
    date: '10-26-2020',
    description: 'Thrive Dental Plan',
    amount: '$99.00',
    paymentType: 'Mastercard ending in 4640 (exp3/2023)',
    status: 'Success',
    receiptUrl: '/receipt'
  }, {
    key: '2',
    date: '10-26-2020',
    description: 'Thrive Dental Plan',
    amount: '$99.00',
    paymentType: 'Mastercard ending in 4640 (exp3/2023)',
    status: 'Success',
    receiptUrl: '/receipt'
  }, {
    key: '3',
    date: '10-26-2020',
    description: 'Thrive Dental Plan',
    amount: '$99.00',
    paymentType: 'Mastercard ending in 4640 (exp3/2023)',
    status: 'Success',
    receiptUrl: '/receipt'
  }
];