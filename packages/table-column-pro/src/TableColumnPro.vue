<template>
  <vc-table-column v-if="visible"
                   :formatter="formatter"
                   :align='align'
                   :prop="prop"
                   :header-align="headerAlign"
                   :label="label"
                   :width="width"
                   :render-header="renderHeader">
    <template slot-scope="scope">
      <slot :row="scope.row"
            :$index="scope.$index">
        <span>{{fomatMethod(scope.row[prop])}}</span>
      </slot>
    </template>
  </vc-table-column>
</template>

<script>
import moment from 'moment';

export default {
  name: 'VcTableColumnPro',
  props: {
    prop: {
      type: String
    },
    label: {
      type: String
    },
    width: {
      type: Number
    },
    renderType: {
      type: String,
      validator: value => ['date', 'time', 'input', 'select'].includes(value)
    },
    placeholder: {
      type: String
    },
    rederWidth: {
      type: String,
      default: '230px'
    },
    param: {
      type: String,
      default: ''
    },
    startDate: {
      type: String
    },
    endDate: {
      type: String
    },
    startTime: {
      type: String
    },
    endTime: {
      type: String
    },
    selectList: {
      type: Array
    },
    isClear: {
      type: Boolean,
      default: true
    },
    visible: {
      type: Boolean,
      default: true
    },
    filterIcon: {
      type: String,
      default: 'vc-icon-search'
    },
    callback: {
      type: Function
    },
    formatter: {
      type: Function,
      default: (row, column, cellValue) => cellValue
    },
    align: {
      type: String
    },
    headerAlign: {
      type: String
    }
  },
  data() {
    return {
      formatD: this.filterIcon
    };
  },

  methods: {

    fomatMethod(value) {
      return this.formatter('', '', value);
    },

    renderHeader(createElement, { column, $index }) {
      switch (this.renderType) {
        case 'date':
          return this.renderDate(createElement, { column, $index });
        case 'time':
          return this.renderTime(createElement, { column, $index });
        case 'input':
          return this.rederInput(createElement, { column, $index });
        case 'select':
          return this.rederSelect(createElement, { column, $index });
        default:
          return column.label;
      }
    },

    rederInput(createElement, { column, $index }) {
      return createElement(
        'div',
        {
          class: 'filters',
          style: {
            color: column.color
          }
        },
        [
          createElement(
            'el-popover',
            {
              props: {
                placement: 'bottom',
                width: '200',
                trigger: 'click'
              }
            },
            [
              createElement('el-input', {
                props: {
                  placeholder: this.placeholder,
                  value: this.param
                },
                nativeOn: {
                  keyup: event => {
                    if (event.keyCode === 13) {
                      this.$emit('update:param', event.target.value);
                      this.callback && this.callback();
                    }
                  }
                },
                on: {
                  blur: event => {
                    this.$emit('update:param', event.target.value);
                    this.callback && this.callback();
                  }
                }
              }),
              createElement(
                'span',
                {
                  slot: 'reference'
                },
                [
                  column.label,
                  createElement('i', {
                    class: this.filterIcon,
                    style: {
                      marginLeft: '4px'
                    }
                  })
                ]
              )
            ]
          )
        ]
      );
    },

    rederSelect(createElement, { column, $index }) {
      return createElement(
        'div',
        {
          class: 'filters',
          style: {
            color: column.color
          }
        },
        [
          createElement(
            'el-popover',
            {
              props: {
                placement: 'bottom',
                width: '200',
                trigger: 'click'
              }
            },
            [
              createElement(
                'el-select',
                {
                  props: {
                    placeholder: this.placeholder,
                    value: this.param,
                    clearable: this.isClear
                  },
                  on: {
                    input: value => {
                      this.$emit('update:param', value);
                      this.callback && this.callback();
                    }
                  }
                },
                [
                  this.selectList.map(item => {
                    return createElement('el-option', {
                      props: {
                        value: item.value,
                        label: item.label
                      }
                    });
                  })
                ]
              ),
              createElement(
                'span',
                {
                  slot: 'reference'
                },
                [
                  column.label,
                  createElement('i', {
                    class: this.filterIcon,
                    style: {
                      marginLeft: '4px'
                    }
                  })
                ]
              )
            ]
          )
        ]
      );
    },

    renderDate(createElement, { column, $index }) {
      return createElement(
        'div',
        {
          class: 'filters'
        },
        [
          createElement(
            'el-popover',
            {
              props: {
                placement: 'bottom',
                width: this.rederWidth,
                trigger: 'click'
              }
            },
            [
              createElement('el-date-picker', {
                props: {
                  placeholder: this.placeholder,
                  value: this.value,
                  type: 'daterange',
                  rangeSeparator: '至',
                  startPlaceholder: '开始日期',
                  endPlaceholder: '结束日期'
                },
                style: {
                  width: this.rederWidth
                },
                on: {
                  input: value => {
                    if (value) {
                      const startDate = moment(value[0]).format('YYYY-MM-DD');
                      const endDate = moment(value[1]).format('YYYY-MM-DD');
                      this.$emit('update:startDate', startDate);
                      this.$emit('update:endDate', endDate);
                      this.callback && this.callback();
                    }
                  }
                }
              }),
              createElement(
                'span',
                {
                  slot: 'reference'
                },
                [
                  column.label,
                  createElement('i', {
                    class: this.filterIcon,
                    style: {
                      marginLeft: '4px'
                    }
                  })
                ]
              )
            ]
          )
        ]
      );
    },

    renderTime(createElement, { column, $index }) {
      return createElement(
        'div',
        {
          class: 'filters'
        },
        [
          createElement(
            'el-popover',
            {
              props: {
                placement: 'bottom',
                width: this.rederWidth,
                trigger: 'click'
              }
            },
            [
              createElement('el-time-picker', {
                props: {
                  placeholder: this.placeholder,
                  value: this.value,
                  type: 'timerange',
                  rangeSeparator: '至',
                  startPlaceholder: '开始时间',
                  endPlaceholder: '结束时间'
                },
                style: {
                  width: this.rederWidth
                },
                on: {
                  input: value => {
                    if (value) {
                      const startTime = moment(value[0]).format('HH:mm:ss');
                      const endTime = moment(value[1]).format('HH:mm:ss');
                      this.$emit('update:startTime', startTime);
                      this.$emit('update:endTime', endTime);
                      this.callback && this.callback();
                    }
                  }
                }
              }),
              createElement(
                'span',
                {
                  slot: 'reference'
                },
                [
                  column.label,
                  createElement('i', {
                    class: this.filterIcon,
                    style: {
                      marginLeft: '4px'
                    }
                  })
                ]
              )
            ]
          )
        ]
      );
    }
  }
};
</script>