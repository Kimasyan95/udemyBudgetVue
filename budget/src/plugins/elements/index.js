import Vue from "vue";
import lang from "element-ui/lib/locale/lang/en"; // английский язык
import locale from "element-ui/lib/locale"; // функция, которая позволяет применить определенный locale
import "element-ui/packages/theme-chalk/lib/index.css"; // импортируем стили
import {
  Button,
  Card,
  Form,
  FormItem,
  Input,
  Select,
  Option,
  Alert
} from "element-ui";

const elements = [Button, Card, Form, FormItem, Input, Select, Option, Alert];

locale.use(lang); // заставляем работать на английском языке

elements.forEach(el => Vue.use(el, { locale })); // делаем элементы глобальными

// теперь нужно это все импортировать в main.js
