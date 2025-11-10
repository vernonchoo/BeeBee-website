<template>
  <Modal v-model="isOpen" :title="t('inquiry.title')" size="md" @close="handleClose">
    <form @submit.prevent="handleSubmit">
      <div class="space-y-4">
        <!-- Parent Name -->
        <div>
          <label class="mb-1 block text-sm font-medium text-gray-700">
            {{ t('inquiry.parentName') }} <span class="text-red-600">*</span>
          </label>
          <input
            v-model="form.parentName"
            type="text"
            required
            class="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
            :class="{ 'border-red-500': errors.parentName }"
          />
          <p v-if="errors.parentName" class="mt-1 text-sm text-red-600">{{ errors.parentName }}</p>
        </div>

        <!-- Phone -->
        <div>
          <label class="mb-1 block text-sm font-medium text-gray-700">
            {{ t('inquiry.phone') }} <span class="text-red-600">*</span>
          </label>
          <input
            v-model="form.phone"
            type="tel"
            required
            class="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
            :class="{ 'border-red-500': errors.phone }"
          />
          <p v-if="errors.phone" class="mt-1 text-sm text-red-600">{{ errors.phone }}</p>
        </div>

        <!-- Email -->
        <div>
          <label class="mb-1 block text-sm font-medium text-gray-700">
            {{ t('inquiry.email') }}
          </label>
          <input
            v-model="form.email"
            type="email"
            class="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
          />
        </div>

        <!-- Child Age -->
        <div>
          <label class="mb-1 block text-sm font-medium text-gray-700">
            {{ t('inquiry.childAge') }} <span class="text-red-600">*</span>
          </label>
          <input
            v-model.number="form.childAge"
            type="number"
            min="3"
            max="18"
            required
            class="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
          />
        </div>

        <!-- Intended Date -->
        <div>
          <label class="mb-1 block text-sm font-medium text-gray-700">
            {{ t('inquiry.intendedDate') }}
          </label>
          <input
            v-model="form.intendedDate"
            type="date"
            class="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
          />
        </div>

        <!-- Note -->
        <div>
          <label class="mb-1 block text-sm font-medium text-gray-700">
            {{ t('inquiry.note') }}
          </label>
          <textarea
            v-model="form.note"
            rows="3"
            class="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
          />
        </div>
      </div>
    </form>

    <template #footer>
      <div class="flex justify-end gap-3">
        <Button variant="outline" @click="handleClose">
          {{ t('common.cancel') }}
        </Button>
        <Button variant="primary" :loading="submitting" @click="handleSubmit">
          {{ t('inquiry.submit') }}
        </Button>
      </div>
    </template>
  </Modal>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { submitInquiry } from '@/api/inquiry'
import type { InquiryPayload } from '@/types/inquiry'
import Modal from '@/components/base/Modal.vue'
import Button from '@/components/base/Button.vue'
import { useToast } from '@/composables/useToast'

interface Props {
  modelValue: boolean
  routeId?: string
  intendedDate?: string
}

const props = defineProps<Props>()
const emit = defineEmits<{
  'update:modelValue': [value: boolean]
}>()

const { t } = useI18n()
const { success, error } = useToast()

const isOpen = ref(props.modelValue)
const submitting = ref(false)
const errors = ref<Record<string, string>>({})

const form = ref<InquiryPayload>({
  parentName: '',
  phone: '',
  email: '',
  childAge: 10,
  routeId: props.routeId,
  intendedDate: '',
  note: '',
})

watch(
  () => props.modelValue,
  (val) => {
    isOpen.value = val
    if (val) {
      // 当模态框打开时，设置表单的初始值
      if (props.routeId) {
        form.value.routeId = props.routeId
      }
      if (props.intendedDate) {
        form.value.intendedDate = props.intendedDate
      }
    }
  }
)

watch(isOpen, (val) => {
  emit('update:modelValue', val)
})

function validateForm(): boolean {
  errors.value = {}

  if (!form.value.parentName.trim()) {
    errors.value.parentName = t('inquiry.required', { field: t('inquiry.parentName') })
  }

  if (!form.value.phone.trim()) {
    errors.value.phone = t('inquiry.required', { field: t('inquiry.phone') })
  }

  return Object.keys(errors.value).length === 0
}

async function handleSubmit() {
  if (!validateForm()) return

  submitting.value = true
  try {
    await submitInquiry(form.value)
    success(t('inquiry.success'))
    handleClose()
    resetForm()
  } catch (err) {
    error(t('inquiry.error'))
  } finally {
    submitting.value = false
  }
}

function handleClose() {
  isOpen.value = false
}

function resetForm() {
  form.value = {
    parentName: '',
    phone: '',
    email: '',
    childAge: 10,
    routeId: props.routeId,
    intendedDate: '',
    note: '',
  }
  errors.value = {}
}
</script>

