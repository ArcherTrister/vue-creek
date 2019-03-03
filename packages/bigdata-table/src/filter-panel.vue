<template>
  <transition name="vc-zoom-in-top">
    <div class="vc-table-filter bigdata-header-filter"
         v-if="multiple"
         v-show="showPopper">
      <div class="vc-table-filter__content">
        <vc-input class="filter-keyword"
                  v-model="keyWord"
                  @keyup.native="changeKeyWord"
                  size="mini"
                  placeholder="请输入内容"></vc-input>
        <vc-checkbox-group class="vc-table-filter__checkbox-group"
                           v-model="filteredValue">
          <vc-checkbox class="filter-label"
                       :title="filter.text"
                       v-for="filter in fiList"
                       :key="filter.value"
                       :label="filter.value">{{ filter.text }}</vc-checkbox>
        </vc-checkbox-group>
      </div>
      <div class="vc-table-filter__bottom">
        <button @click="handleConfirm"
                :class="{ 'is-disabled': filteredValue.length === 0 }"
                :disabled="filteredValue.length === 0">{{ t('el.table.confirmFilter') }}</button>
        <button @click="handleReset">{{ t('el.table.resetFilter') }}</button>
      </div>
    </div>
    <div class="vc-table-filter"
         v-else
         v-show="showPopper">
      <ul class="vc-table-filter__list">
        <li class="vc-table-filter__list-item"
            :class="{ 'is-active': filterValue === undefined || filterValue === null }"
            @click="handleSelect(null)">{{ t('el.table.clearFilter') }}</li>
        <li class="vc-table-filter__list-item"
            v-for="filter in fiList"
            :label="filter.value"
            :key="filter.value"
            :class="{ 'is-active': isActive(filter) }"
            @click="handleSelect(filter.value)">{{ filter.text }}</li>
      </ul>
    </div>
  </transition>
</template>

<script type="text/babel">
import Popper from 'vue-creek/src/utils/vue-popper';
import { PopupManager } from 'vue-creek/src/utils/popup';
import Locale from 'vue-creek/src/mixins/locale';
import Clickoutside from 'vue-creek/src/utils/clickoutside';
import Dropdown from './dropdown';
import VcCheckbox from 'vue-creek/packages/checkbox';
import VcCheckboxGroup from 'vue-creek/packages/checkbox-group';

export default {
  name: 'VcTableFilterPanel',

  mixins: [Popper, Locale],

  directives: {
    Clickoutside
  },

  components: {
    VcCheckbox,
    VcCheckboxGroup
  },

  props: {
    placement: {
      type: String,
      default: 'bottom-end'
    }
  },

  customRender(h) {
    return (
      <div class='vc-table-filter'>
        <div class='vc-table-filter__content' />
        <div class='vc-table-filter__bottom'>
          <button on-click={this.handleConfirm}>
            {this.t('el.table.confirmFilter')}
          </button>
          <button on-click={this.handleReset}>
            {this.t('el.table.resetFilter')}
          </button>
        </div>
      </div>
    );
  },

  methods: {
    isActive(filter) {
      return filter.value === this.filterValue;
    },

    handleOutsideClick() {
      this.showPopper = false;
    },

    handleConfirm() {
      this.confirmFilter(this.filteredValue);
      this.handleOutsideClick();
    },

    handleReset() {
      this.filteredValue = [];
      this.confirmFilter(this.filteredValue);
      this.handleOutsideClick();
      //  清空
      this.fiList = [];
    },

    handleSelect(filterValue) {
      this.filterValue = filterValue;

      if (typeof filterValue !== 'undefined' && filterValue !== null) {
        this.confirmFilter(this.filteredValue);
      } else {
        this.confirmFilter([]);
      }

      this.handleOutsideClick();
    },

    confirmFilter(filteredValue) {
      this.table.store.commit('filterChange', {
        column: this.column,
        values: filteredValue
      });
      this.table.store.updateAllSelected();
      //
      //  设置滚动条高度与左边度
      this.table.scrollLeft = 0;
      this.table.scrollTop = 0;
      //  更新数据高度分组
      // this.table.initGroupHeight(filteredValue);
      //  重新计算高度
      this.table.setComputedProps();
      //  延迟 计算滚动条是否显示
      setTimeout(() => {
        this.table.updateScrollY();
      }, 100);
    },
    //   关键词输入
    changeKeyWord() {
      let list = [];
      let keyWord = this.keyWord;
      this.filters.filter((e) => {
        if (e.value.toString().indexOf(keyWord.toString()) > -1) {
          list.push(e);
        }
      });
      this.fiList = list;
    }
  },

  data() {
    return {
      table: null,
      cell: null,
      column: null,
      keyWord: '',
      // 搜索到显示出来
      fiList: []
    };
  },

  computed: {
    filters() {
      return this.column && this.column.filters;
    },

    filterValue: {
      get() {
        return (this.column.filteredValue || [])[0];
      },
      set(value) {
        if (this.filteredValue) {
          if (typeof value !== 'undefined' && value !== null) {
            this.filteredValue.splice(0, 1, value);
          } else {
            this.filteredValue.splice(0, 1);
          }
        }
      }
    },
    filteredValue: {
      get() {
        if (this.column) {
          return this.column.filteredValue || [];
        }
        return [];
      },
      set(value) {
        if (this.column) {
          this.column.filteredValue = value;
        }
      }
    },

    multiple() {
      if (this.column) {
        return this.column.filterMultiple;
      }
      return true;
    }
  },

  mounted() {
    this.popperElm = this.$el;
    this.referenceElm = this.cell;
    this.table.bodyWrapper.addEventListener('scroll', () => {
      this.updatePopper();
    });

    this.$watch('showPopper', value => {
      if (this.column) this.column.filterOpened = value;
      if (value) {
        Dropdown.open(this);
      } else {
        Dropdown.close(this);
      }
    });
  },
  watch: {
    showPopper(val) {
      if (
        val === true &&
        parseInt(this.popperJS._popper.style.zIndex, 10) < PopupManager.zIndex
      ) {
        this.popperJS._popper.style.zIndex = PopupManager.nextZIndex();
      }
      //  显示列表
      if (val) {
        //  打开放入列表
        this.fiList = [].concat(this.filters);
      } else {
        //  关闭清除列表
        this.fiList = [];
      }
    }
  }
};
</script>
<style scoped>
.bigdata-header-filter {
}
.bigdata-header-filter .filter-keyword {
  margin: 5px;
  margin-bottom: 0;
  width: 110px;
}
.bigdata-header-filter .vc-table-filter__checkbox-group {
  max-height: 400px;
  width: 120px;
  overflow-x: hidden;
  overflow-y: auto;
}
.bigdata-header-filter .filter-label {
  width: 120px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>
