<script setup>
import { Array } from "../stores/array.js";
import { Adorp } from "../stores/buy.js";
const { Wicha } = Array();
const { AOP, Pheim, Lb } = Adorp();
</script>

<template>
  <div class="row">
    <div class="col">รหัส</div>
    <div class="col">ชื่อ</div>
    <div class="col">กลุ่ม</div>
    <div class="col"></div>
  </div>
  <div class="row mt-3" v-for="n in Wicha.length">
    <div class="col" v-if="Wicha && Wicha[n - 1]">{{ Wicha[n - 1].Code }}</div>
    <div class="col" v-if="Wicha && Wicha[n - 1]">{{ Wicha[n - 1].Name }}</div>
    <div class="col" v-if="Wicha && Wicha[n - 1]">{{ Wicha[n - 1].group }}</div>
    <div class="col">
      <button
        class="btn btn-success"
        @click="Pheim(Wicha[n - 1].Code, Wicha[n - 1].Name, Wicha[n - 1].group)"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-cart4"
          viewBox="0 0 16 16"
        >
          <path
            d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"
          />
        </svg>
      </button>
    </div>
  </div>
  <div class="row mt-5">
    <div class="col">เลข</div>
    <div class="col">รหัส</div>
    <div class="col">ชื่อ</div>
    <div class="col">กลุ่ม</div>
    <div class="col"></div>
  </div>
  <div class="row mt-3" v-for="n in AOP.length">
    <div class="col">{{ n }}</div>
    <div class="col" v-if="AOP && AOP[n - 1]">{{ AOP[n - 1].code }}</div>
    <div class="col" v-if="AOP && AOP[n - 1]">{{ AOP[n - 1].name }}</div>
    <div class="col" v-if="AOP && AOP[n - 1]">{{ AOP[n - 1].group }}</div>
    <div class="col">
      <button class="btn btn-success" @click="Lb(n - 1)">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-trash"
          viewBox="0 0 16 16"
        >
          <path
            d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"
          />
          <path
            fill-rule="evenodd"
            d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
          />
        </svg>
      </button>
    </div>
  </div>
  <div class="d-flex justify-content-center">
    <!-- Button trigger modal -->
    <button
      type="button"
      class="btn btn-primary"
      data-bs-toggle="modal"
      data-bs-target="#exampleModal"
    >
      ยืนยัน
    </button>
  </div>
  <!-- Modal -->
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">ยืนยันการลงทะเบียน</h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">ตรวจสอบข้อมูลก่อนกดยืนยัน</div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
            ปิด
          </button>
          <button type="button" class="btn btn-primary" data-bs-dismiss="modal">
            ยืนยัน
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
