/* eslint-disable no-lone-blocks */
import React from 'react';
import NameInput from './NameInput';
import styles from './Dropdown.module.css';

export default function Dropdown() {
  return (
    <div className={styles.dropdownWrapper}>
      <NameInput
        placeholder="Введите категорию"
        label="Категория"
      />
    </div>
  );
}

{ /* <div class="dropdown-wrapper" v-click-outside="close">
    <div class="dropdown-toggle" @click="toggle">
      <slot name="dropdown-toggle" />
    </div>
    <div class="dropdown-items" v-show="isOpened" @click="close">
      <slot name="dropdown-items" />
    </div>
  </div> */ }

{ /* <dropdown>
            <template #dropdown-toggle>
              <my-input
                id="passport-foreign_country"
                label="Страна выдачи"
                :value="formData.passportForeign.country"
                @input="debouncedCountriesOfIssue"
              />
            </template>
            <template #dropdown-items>
              <div
                v-for="item in filteredCountriesOfIssue"
                :key="item + countriesList.indexOf(item)"
                class="dropdown-item"
                @click="selectedCountry(item)"
              >
                {{ item }}
              </div>
            </template>
          </dropdown> */ }
