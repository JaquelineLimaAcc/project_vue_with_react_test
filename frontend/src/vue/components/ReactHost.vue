<template>
  <div ref="reactIamRoot"></div>
  <div ref="reactByeRoot1"></div>
  <div ref="reactByeRoot2"></div>
  <div ref="reactCustomersList"></div>
  <div ref="reactCustomersJson"></div>
</template>

<script setup>
import { onMounted, ref, onUnmounted } from 'vue'
import { mountReactComponent } from '@/react/renderReact.jsx'
import ReactIam from '@/react/components/IamReactComponent.jsx'
import ReactBye from '@/react/components/ReactBye.jsx'
import ReactCustomersList from '@/react/components/CustomersList.jsx'
import ReactCustomersJson from '@/react/components/Button.jsx'

const reactIamRoot = ref(null)

const reactByeRoot1 = ref(null)
const reactByeRoot2 = ref(null)

const reactCustomersList = ref(null)
const reactCustomersJson = ref(null)

let IamInstance = null

let ByeInstance1 = null
let ByeInstance2 = null

let CustomersListInstance = null
let CustomersJsonInstance = null

onMounted(() => {
  IamInstance = mountReactComponent(ReactIam, reactIamRoot.value, { greatings: "Good afternoon", name: "Jaqueline", question: "How are you?" })
  ByeInstance1 = mountReactComponent(ReactBye, reactByeRoot1.value, { farewell: "See you later", name: "Jaqueline", reminder: "Don't forget to study Vue and React!" })
  ByeInstance2 = mountReactComponent(ReactBye, reactByeRoot2.value, { farewell: "See you", name: "Ricardo", reminder: "Don't forget to study Vue and React!" })

  CustomersListInstance = mountReactComponent(ReactCustomersList, reactCustomersList.value, { })
  CustomersJsonInstance = mountReactComponent(ReactCustomersJson, reactCustomersJson.value, { })
})

onUnmounted(() => {
  IamInstance && IamInstance.unmount()

  ByeInstance1 && ByeInstance1.unmount()
  ByeInstance2 && ByeInstance2.unmount()

  CustomersListInstance && CustomersListInstance.unmount()
  CustomersJsonInstance && CustomersJsonInstance.unmount()
})
</script>