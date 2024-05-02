import React from "react";
import { faker } from "@faker-js/faker";

const FakerObj = () => {
  // Locations - Generate valid looking Addresses, Zip Codes, Street Names, States, and Countries!
  const location = {
    buildingNumber: faker.address.buildingNumber(),
    cardinalDirection: faker.address.cardinalDirection(),
    city: faker.address.city(),
    country: faker.address.country(),
    countryCode: faker.address.countryCode(),
    county: faker.address.county(),
    county: faker.address.direction(),
    latitude: faker.address.latitude(),
    longitude: faker.address.longitude(),
    nearbyGPSCoordinate: faker.address.nearbyGPSCoordinate(),
    ordinalDirection: faker.address.ordinalDirection(),
    secondaryAddress: faker.address.secondaryAddress(),
    state: faker.address.state(),
    street: faker.address.street(),
    streetAddress: faker.address.streetAddress(),
    timeZone: faker.address.timeZone(),
    zipCode: faker.address.zipCode(),
  };

  // Time-based Data - Past, present, future, recent, soon... whenever!
  const timeData = {
    pastDate: faker.date.past().toLocaleDateString(),
    futureDate: faker.date.future().toLocaleDateString(),
    recentDate: faker.date.recent().toLocaleDateString(),
    soonDate: faker.date.future().toLocaleDateString(),
    anytime: faker.date.anytime().toLocaleDateString(),
    between: faker.date.between().toLocaleDateString(),
    month: faker.date.month(),
    soon: faker.date.soon(),
    weekday: faker.date.weekday(),
  };

  // Localization - Pick a locale to generate realistic looking Names, Addresses, and Phone Numbers.
  faker.seed(123); // Set seed for consistent results

  // Finance - Create stubbed out Account Details, Transactions, and Crypto Addresses.
  const financeData = {
    account: {
      accountNumber: faker.finance.account(),
      accountName: faker.finance.accountName(),
      amount: faker.finance.amount(),
      credictCardCVV: faker.finance.creditCardCVV(),
      creditCardIssuer: faker.finance.creditCardIssuer(),
      creditCardNumber: faker.finance.creditCardNumber(),
    },
    transaction: {
      transactionType: faker.finance.transactionType(),
      currencyCode: faker.finance.currencyCode(),
      bitcoinAddress: faker.finance.bitcoinAddress(),
    },
  };

  // Products - Generate Prices, Product Names, Adjectives, and Descriptions.
  const productData = {
    productName: faker.commerce.productName(),
    price: faker.commerce.price(),
    adjective: faker.commerce.productAdjective(),
    description: faker.commerce.productDescription(),
    department: faker.commerce.department(),
    isbn: faker.commerce.isbn(),
    product: faker.commerce.product(),
    material: faker.commerce.productMaterial(),
  };

  // Names - Generate virtual humans with a complete online and offline identity.
  const personData = {
    color: faker.internet.color(),
    displayName: faker.internet.displayName(),
    domainName: faker.internet.domainName(),
    domainSuffix: faker.internet.domainSuffix(),
    domainWord: faker.internet.domainWord(),
    email: faker.internet.email(),
    emoji: faker.internet.emoji(),
    email: faker.internet.exampleEmail(),
    httpMethod: faker.internet.httpMethod(),
    httpStatusCode: faker.internet.httpStatusCode(),
    ip: faker.internet.ip(),
    ipv4: faker.internet.ipv4(),
    ipv6: faker.internet.ipv6(),
    mac: faker.internet.mac(),
    password: faker.internet.password(),
    port: faker.internet.port(),
    protocol: faker.internet.protocol(),
    url: faker.internet.url(),
    userAgent: faker.internet.userAgent(),
    userName: faker.internet.userName(),
    avatar: faker.internet.avatar(),
  };

  // Numbers - Generate random numbers and strings.
  const randomData = {
    Number: faker.datatype.number(),
    String: faker.datatype.string(),
    Boolean: faker.datatype.boolean(),
    UUID: faker.datatype.uuid(),
    Array: faker.datatype.array(),
    DateTime: faker.datatype.datetime(),
    Json: faker.datatype.json(),
    Float: faker.datatype.float(),
    Hexadecimal: faker.datatype.hexadecimal(),
  };

  return (
    <div className="container">
      <h3 className="text-center">Random Fake Data</h3>
      <div class="p-2">
        <div className="row">
          <div
            class="nav flex-column nav-pills me-3 col-lg-2 border border-2  rounded-3 p-2"
            id="v-pills-tab"
            role="tablist"
            aria-orientation="vertical"
          >
            <button
              class="nav-link active"
              id="v-pills-Location-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-Location"
              type="button"
              role="tab"
              aria-controls="v-pills-Location"
              aria-selected="true"
            >
              Location
            </button>
            <button
              class="nav-link"
              id="v-pills-time-based-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-time-based"
              type="button"
              role="tab"
              aria-controls="v-pills-time-based"
              aria-selected="false"
            >
              Time-based
            </button>
            {/* <button
              class="nav-link"
              id="v-pills-localization-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-localization"
              type="button"
              role="tab"
              aria-controls="v-pills-localization"
              aria-selected="false"
            >
              Localization
            </button> */}
            <button
              class="nav-link"
              id="v-pills-finance-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-finance"
              type="button"
              role="tab"
              aria-controls="v-pills-finance"
              aria-selected="false"
            >
              Finance
            </button>
            <button
              class="nav-link"
              id="v-pills-products-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-products"
              type="button"
              role="tab"
              aria-controls="v-pills-products"
              aria-selected="false"
            >
              Products
            </button>
            <button
              class="nav-link"
              id="v-pills-person-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-person"
              type="button"
              role="tab"
              aria-controls="v-pills-person"
              aria-selected="false"
            >
              Person
            </button>
            <button
              class="nav-link"
              id="v-pills-numbers-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-numbers"
              type="button"
              role="tab"
              aria-controls="v-pills-numbers"
              aria-selected="false"
            >
              Numbers
            </button>
          </div>
          <div class="tab-content col-lg-9" id="v-pills-tabContent">
            <div
              class="tab-pane fade show active"
              id="v-pills-Location"
              role="tabpanel"
              aria-labelledby="v-pills-Location-tab"
              tabindex="0"
            >
              <div className="border border-2  rounded-3 p-4 text-secondary">
                <pre>
                  <code>
                    <p className="">{JSON.stringify(location, null, 2)}</p>
                  </code>
                </pre>
              </div>
            </div>
            <div
              class="tab-pane fade"
              id="v-pills-time-based"
              role="tabpanel"
              aria-labelledby="v-pills-time-based-tab"
              tabindex="0"
            >
              <div className="border border-2  rounded-3 p-4 text-secondary">
                <pre>
                  <code>
                    <p>{JSON.stringify(timeData, null, 2)}</p>
                  </code>
                </pre>
              </div>
            </div>
            {/* <div
              class="tab-pane fade"
              id="v-pills-localization"
              role="tabpanel"
              aria-labelledby="v-pills-localization-tab"
              tabindex="0"
            >
              <div className="border border-2  rounded-3 p-4 text-secondary">
                <pre>
                  <code>
                    <p>{JSON.stringify(localizedData, null, 2)}</p>
                  </code>
                </pre>
              </div>
            </div> */}
            <div
              class="tab-pane fade"
              id="v-pills-finance"
              role="tabpanel"
              aria-labelledby="v-pills-finance-tab"
              tabindex="0"
            >
              <div className="border border-2  rounded-3 p-4 text-secondary">
                <pre>
                  <code>
                    <p>{JSON.stringify(financeData, null, 2)}</p>
                  </code>
                </pre>
              </div>
            </div>
            <div
              class="tab-pane fade"
              id="v-pills-products"
              role="tabpanel"
              aria-labelledby="v-pills-products-tab"
              tabindex="0"
            >
              <div className="border border-2  rounded-3 p-4 text-secondary">
                <pre>
                  <code>
                    <p>{JSON.stringify(productData, null, 2)}</p>
                  </code>
                </pre>
              </div>
            </div>
            <div
              class="tab-pane fade"
              id="v-pills-person"
              role="tabpanel"
              aria-labelledby="v-pills-person-tab"
              tabindex="0"
            >
              <div className="border border-2  rounded-3 p-4 text-secondary">
                <pre>
                  <code>
                    <p>{JSON.stringify(personData, null, 2)}</p>
                  </code>
                </pre>
              </div>
            </div>
            <div
              class="tab-pane fade"
              id="v-pills-numbers"
              role="tabpanel"
              aria-labelledby="v-pills-numbers-tab"
              tabindex="0"
            >
              <div className="border border-2  rounded-3 p-4 text-secondary">
                <pre>
                  <code>
                    <p>{JSON.stringify(randomData, null, 2)}</p>
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FakerObj;
